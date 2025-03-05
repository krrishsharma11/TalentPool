import axios from 'axios';

// POST: Send a message
export const sendMessage = async (chatId, sender, message) => {
  try {
    const response = await axios.post(
      'https://job-portal-candidate-be.onrender.com/chatBot/id',
      { chatId, sender, message }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

// GET: Fetch chat messages
export const fetchMessages = async (userId) => {
  try {
    const response = await axios.get(
      `https://job-portal-candidate-be.onrender.com/chatBot/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
  }
};
