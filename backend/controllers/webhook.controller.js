import { Webhook } from "svix";
import UserModel from "../models/user.model.js";
import PostModel from "../models/post.model.js";
import CommentModel from "../models/comment.model.js";

export const clerkWebHook = async (req, res) => {
    console.log('in clerkWebHook');
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error("clerkWebHook::Controller::Error - Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env");
    }

    // Create new Svix instance with secret
    const wh = new Webhook(WEBHOOK_SECRET);

    // Get headers and body
    const headers = req.headers;
    const payload = req.body;

    // Get Svix headers for verification
    const svixId = headers['svix-id'];
    const svixTimestamp = headers['svix-timestamp'];
    const svixSignature = headers['svix-signature'];

    // If there are no headers, error out
    if (!svixId || !svixTimestamp || !svixSignature) {
        return res.status(400).json({
            success: false,
            message: 'clerkWebHook::Controller::Error - Missing svix headers',
        });
    }

    let evt;

    // Attempt to verify the incoming webhook
    // If successful, the payload will be available from 'evt'
    // If verification fails, error out and return error code
    try {
        evt = wh.verify(payload, {
            'svix-id': svixId,
            'svix-timestamp': svixTimestamp,
            'svix-signature': svixSignature,
        });
    } catch (err) {
        console.log('clerkWebHook::Controller::Error - Could not verify webhook: ', err.message);
        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }

    // Now do something with payload
    const evtType = evt.type;
    const evtData = evt.data || {};
    console.log(`clerkWebHook::Controller - ID: ${evtData.id}, event type: ${evtType}`);
    console.log('clerkWebHook::Controller - payload: ', evt.data);
    const primaryEmailObj = evtData.email_addresses?.find((item) => item.id === evtData.primary_email_address_id) || {};
    const email = primaryEmailObj.email_address;

    if (evtType === "user.created") {
        const newUser = new UserModel({
            clerkUserId: evtData.id,
            username: evtData.username || email,
            email: email,
            img: evtData.profile_image_url
        });

        await newUser.save();
    } else if (evtType === "user.updated") {
        const updatedUser = await UserModel.findOneAndUpdate(
            { clerkUserId: evtData.id },
            {
                username: evtData.username || email,
                email: email,
                img: evtData.profile_image_url
            }
        );

        if ( !updatedUser ) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
    } else if (evtType === "user.deleted") {
        const deletedUser = await UserModel.findOneAndDelete({ clerkUserId: evtData.id });

        if ( !deletedUser ) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        await PostModel.deleteMany({ user: deletedUser._id });
        await CommentModel.deleteMany({ user: deletedUser._id });
    }

    return res.status(200).json({
        success: true,
        message: 'Webhook received',
    });

};
