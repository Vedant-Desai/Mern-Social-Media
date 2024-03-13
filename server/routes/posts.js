import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

/* READ */
router.route("/").get(verifyToken, getFeedPosts);
router.route("/:userId/posts").get(verifyToken, getUserPosts);

/*UPDATE*/
router.route("/:id/like").patch(verifyToken, likePost);

export default router;
