import express from "express";
import 'dotenv/config';
import connectDB from "./lib/connectDB.js";
import commentRouter from "./routes/comment.route.js";
import postRouter from "./routes/post.route.js";
import userRouter from "./routes/user.route.js";
import webHookRouter from "./routes/webhook.route.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";

const PORT = parseInt(process.env.SERVER_PORT, 10) || 3000;
const app = express();

app.use(cors(process.env.CLIENT_URL));
app.use(clerkMiddleware());

// The webhook router uses body-parser so moving it above the
// call to express.json() to prevent conflict
app.use("/webhooks", webHookRouter);

app.use(express.json());

app.use("/comments", commentRouter);
app.use("/posts", postRouter);
app.use("/users", userRouter);

// Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || err.statusCode || 500);
    res.json({
        message: err.message || "something went wrong",
        status: err.status || err.statusCode || 500,
        stack: err.stack,
    });
});

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running! listening on: ", PORT);
});
