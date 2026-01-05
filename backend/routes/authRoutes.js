import express from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import User from "../models/user.model.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);

router.get("/me", authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId).select("fullName email");
  res.status(200).json({
    authenticated: true,
    userId: req.userId,
    fullName: user.fullName,
  });
});

export default router;
