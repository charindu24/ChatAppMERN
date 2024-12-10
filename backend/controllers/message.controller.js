import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        // Validate input
        if (!message || !receiverId) {
            return res.status(400).json({ error: "Message content and receiver ID are required" });
        }

        // Find or create a conversation
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
                messages: [],
            });
        }

        // Create and save the new message
        const newMessage = await new Message({
            senderId,
            receiverId,
            message,
        }).save();

        // Add the message to the conversation and save
        conversation.messages.push(newMessage._id);
        await conversation.save();

        // Respond with the saved message
        res.status(201).json(newMessage);
    } catch (error) {
        console.error("Error in sendMessage controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
