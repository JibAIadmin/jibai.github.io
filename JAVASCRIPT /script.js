// --- JibAI Script ---
// This script manages the chat interface, validates user input,
// maintains conversation context, and integrates with an AI API.

// DOM Elements
const userInputField = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const responseOutput = document.getElementById('response-output');

// Conversation history for context
let conversationHistory = [];

// Debug: Confirm script is running
alert("JibAI script is running!");

// Event listener for the Send button
sendButton.addEventListener('click', handleUserInput);

/**
 * Handles user input when the Send button is clicked.
 */
function handleUserInput() {
  const userInput = userInputField.value.trim();
  console.log("User input received:", userInput); // Debugging

  // Validate input; if empty, do nothing
  if (!validateInput(userInput)) {
    return;
  }

  // Append user's message to the chat display
  appendMessage('You', userInput);

  // Add user input to conversation history
  conversationHistory.push({ role: 'user', content: userInput });

  // Generate a local test response (for now)
  const localResponse = generateResponse(userInput);
  console.log("Generated response:", localResponse); // Debugging
  appendMessage('JibAI', localResponse);
  conversationHistory.push({ role: 'ai', content: localResponse });

  // Uncomment the following lines when your API is ready for integration.
  /*
  sendMessageToAPI(userInput)
    .then(response => {
      // Display the API's response
      appendMessage('JibAI', response);
      conversationHistory.push({ role: 'ai', content: response });
    })
    .catch(error => {
      console.error('API Error:', error);
      appendMessage('JibAI', "Sorry, I couldn't process that.");
    });
  */

  // Clear the input field after sending
  userInputField.value = '';
}

/**
 * Validates the user input.
 * @param {string} input - The user input.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validateInput(input) {
  return input !== "";
}

/**
 * Appends a new message to the chat display.
 * @param {string} sender - The sender's name (e.g., "You" or "JibAI").
 * @param {string} message - The message content.
 */
function appendMessage(sender, message) {
  const messageElement = document.createElement('p');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  responseOutput.appendChild(messageElement);
  // Auto-scroll to the bottom of the chat
  responseOutput.scrollTop = responseOutput.scrollHeight;
}

/**
 * Sends the user's message to the AI API and returns the response.
 * @param {string} message - The message to send.
 * @returns {Promise<string>} - A promise that resolves to the API response.
 */
async function sendMessageToAPI(message) {
  // Placeholder API endpoint URL; replace with your actual endpoint.
  const apiUrl = 'https://your-api-endpoint.com/chat';

  // Build the payload. This can include conversation history if needed.
  const payload = {
    message: message,
    history: conversationHistory
  };

  // Make a POST request to the API.
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  // Parse the JSON response from the API.
  const data = await response.json();

  // Assume the API returns the reply in data.reply.
  return data.reply;
}

/**
 * Generates a test response based on the user input.
 * Replace this function with more advanced logic or API integration later.
 * @param {string} userInput - The user's message.
 * @returns {string} - The generated response.
 */
function generateResponse(userInput) {
  return "Test response for: " + userInput;
}

/**
 * Starts the conversation by sending a welcome message.
 */
function startConversation() {
  const welcomeMessage = "Hello! How can I help you today?";
  appendMessage('JibAI', welcomeMessage);
  conversationHistory.push({ role: 'ai', content: welcomeMessage });
}

// Start the conversation once the DOM is loaded.
document.addEventListener("DOMContentLoaded", startConversation);