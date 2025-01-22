import PostModel from "../models/post.model.js";
import UserModel from "../models/user.model.js";

export const getPosts = async (req, res) => {
    const posts = await PostModel.find();
    res.status(200).json(posts);
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
    let baseSlug = req.body.title.replace(/ /g, "-").toLowerCase();
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
