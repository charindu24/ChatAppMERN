import mongoose, { mongo } from "mongoose"; // Importing mongoose for database operations

// Define a schema for the User collection
const userSchema = new mongoose.Schema({
    fullName: {
        type: String, // Specifies the type of the field as String
        required: true, // This field is mandatory
    },
    username: {
        type: String, // Specifies the type of the field as String
        required: true, // This field is mandatory
        unique: true, // Ensures that the username is unique across all users
    },
    password: {
        type: String, // Specifies the type of the field as String
        required: true, // This field is mandatory
        minlength: 6, // Password must be at least 6 characters long
    },
    gender: {
        type: String, // Specifies the type of the field as String
        required: true, // This field is mandatory
        enum: ["male", "female"], // Restricts the value of gender to "male" or "female" only
    },
    profilePic: {
        type: String, // Specifies the type of the field as String
        default: "", // Sets a default value of an empty string if no profile picture is provided
    },
});

// Create a model from the schema
// The 'User' model represents the 'users' collection in the database
const User = mongoose.model("User", userSchema);

export default User; // Export the model to use it in other parts of the application
