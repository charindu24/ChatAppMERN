import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime, formatDateForChat } from "../../utils/dateUtils"; // Importing both functions

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const formattedDate = formatDateForChat(message.createdAt); // Get formatted date (Today, Yesterday, or day of the week)
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic || "/default-avatar.png" // Add fallback
    : selectedConversation?.profilePic || "/default-avatar.png";
  const bubbleBgColor = fromMe ? "bg-emerald-500" : "bg-gray-600";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={profilePic}
            alt={fromMe ? "Your profile picture" : "Chat partner's profile picture"}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {/* Display date and time */}
        <span>{formattedDate}</span> • <span>{formattedTime}</span>
      </div>
    </div>
  );
};

export default Message;























/*


import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";


const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation()
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-emerald-500" : "";
  const shakeClass = message.shouldShake ? "shake" : ""
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img
				src={profilePic}
				alt='tailwind CSS chat bubble component'
				/>
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>

        
    </div>
  );
};

export default Message; */