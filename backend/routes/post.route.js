import express from "express";
import { getPosts, getPost, createPost, deletePost, uploadAuth } from "../controllers/post.controllers.js";

const router = express.Router();

router.get("/upload-auth", uploadAuth);

router.get("/", getPosts);
router.get("/:slug", getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);

export default router;
