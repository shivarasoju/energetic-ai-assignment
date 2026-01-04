import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

connectDB();

const app = express();

/* 🔹 IMPORTANT for Render / proxies */
app.set("trust proxy", 1);

/* 🔹 Middleware order matters */
app.use(express.json());
app.use(cookieParser());

/* ✅ CORS (your origin kept exactly the same) */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://energetic-ai-assignment-zfb1.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* 🔹 Preflight support */
// app.options("*", cors());

/* 🔹 Routes */
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
