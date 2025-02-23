export function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0");
}

// Function to format the date for chat messages
export function formatDateForChat(dateString) {
    const messageDate = new Date(dateString);
    const today = new Date();

    // Check if the message is from today
    if (
        messageDate.getDate() === today.getDate() &&
        messageDate.getMonth() === today.getMonth() &&
        messageDate.getFullYear() === today.getFullYear()
    ) {
        return "Today";
    }

    // Check if the message is from yesterday
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    if (
        messageDate.getDate() === yesterday.getDate() &&
        messageDate.getMonth() === yesterday.getMonth() &&
        messageDate.getFullYear() === yesterday.getFullYear()
    ) {
        return "Yesterday";
    }

    // Otherwise, return the day of the week (e.g., "Tuesday")
    return messageDate.toLocaleDateString("en-US", { weekday: "long" });
}
