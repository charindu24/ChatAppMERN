import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());  // This is necessary for parsing JSON request body

// Mount the auth routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  connectToMongoDB();  // Ensure MongoDB connection
  console.log(`Server Running on port ${PORT}`);


});




