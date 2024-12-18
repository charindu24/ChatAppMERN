import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

// Define the routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
