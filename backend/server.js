import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; 

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import path from 'path';

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";



const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

dotenv.config();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());  // This is necessary for parsing JSON request body
app.use(cookieParser());



// Mount the auth routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


server.listen(PORT, () => {
  connectToMongoDB();  // Ensure MongoDB connection
  console.log(`Server Running on port ${PORT}`);


});




