import ImageKit from "imagekit";
import PostModel from "../models/post.model.js";
import UserModel from "../models/user.model.js";

export const getPosts = async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 2;
    const posts = await PostModel
        .find()
        .populate("user", "username")
        .limit(limit)
        .skip((page - 1) * limit);

    const totalPosts = await PostModel.countDocuments();
    const hasMore = page * limit < totalPosts;

    res.status(200).json({ posts, hasMore });
};

export const getPost = async (req, res) => {
    const post = await PostModel.findOne({ slug: req.params.slug });
    res.status(200).json(post);
};

export const createPost = async (req, res) => {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated");
    }

    const user = await UserModel.findOne({ clerkUserId });

    if (!user) {
        return res.status(404).json("User not found");
    }

    // Logic to create a unique slug based on the title
    let baseSlug = req.body.title
        .replace(/[^\w\s-]/g, '')   // Remove non-word characters except spaces and hyphens
        .trim()                     // Remove any leading / trailing whitespace
        .replace(/\s+/g, "-")       // Replace spaces with a hyphen
        .toLowerCase()              // Convert to lowercase
        .slice(0, 55);              // Limit to 55 characters to prevent the slug from being too long
    let slug = baseSlug;

    let existingPost = await PostModel.findOne({ slug });
    let counter = 2;

    while (existingPost) {
        slug = `${baseSlug}-${counter}`;
        existingPost = await PostModel.findOne({ slug });
        counter++;
    }

    const newPost = new PostModel({
        user: user._id,
        slug: slug,
        ...req.body
    });
    const post = await newPost.save();
    res.status(200).json(post);
};

export const deletePost = async (req, res) => {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated");
    }

    const user = await UserModel.findOne({ clerkUserId });

    if (!user) {
        return res.status(404).json("User not found");
    }

    const deletedPost = await PostModel.findOneAndDelete({
        _id: req.params.id,
        user: user._id
    });

    if (!deletedPost) {
        return res.status(403).json("User is not the owner of the post");
    }

    res.status(200).json("post has been deleted.");
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY
});

export const uploadAuth = async (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
};
