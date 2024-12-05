import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

// Define relative routes
router.post("/api/auth/signup", signup);
router.post("/api/auth/login", login);
router.post("/api/auth/logout", logout);

export default router;
