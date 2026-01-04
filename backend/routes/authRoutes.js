import express from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);

router.get("/me", authMiddleware, (req, res) => {
  res.status(200).json({
    authenticated: true,
    userId: req.userId,
  });
});

export default router;
