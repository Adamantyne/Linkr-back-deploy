import { Router } from "express";

import authRouter from "./authRouter.js";
import postsRouter from "./postsRouter.js";
import likesRouter from "./likesRouter.js";
import hashtagRouter from "./hashtagRouter.js";
import userRouter from "./userRouter.js";
import followingRouter from "./followingRouter.js";

const router = Router();

router.use(authRouter);
router.use(postsRouter);
router.use(likesRouter);
router.use(hashtagRouter);
router.use(userRouter);
router.use(followingRouter);

export default router;
