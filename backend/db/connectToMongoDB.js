import mongoose from "mongoose"; // Importing mongoose for database connection

// Function to connect to MongoDB using Mongoose
const connectToMongoDB = async () => {
    try {
        // Attempt to connect to the MongoDB database using the connection string in the environment variable
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB"); // Log success message on successful connection
    } catch (error) {
        // Log error message if connection fails
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB; // Exporting the function to use in other parts of the application
