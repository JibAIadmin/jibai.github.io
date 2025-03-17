// --- JibAI v1.0 ---
// This script handles user input, generates responses, and maintains chat history.

// DOM Elements
const userInputField = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const responseOutput = document.getElementById('response-output');

// Conversation history
let conversationHistory = [];

// Event Listener for Send Button
sendButton.addEventListener('click', handleUserInput);

// Function to Handle User Input
function handleUserInput() {
    const userInput = userInputField.value.trim();
    if (userInput === "") return;

    // Append user's message to chat and history
    appendMessage("You", userInput);
    conversationHistory.push({ role: 'user', content: userInput });

    // Generate AI response
    const response = generateResponse(userInput);
    appendMessage("JibAI", response);
    conversationHistory.push({ role: 'ai', content: response });

    // Clear input field
    userInputField.value = '';
}

// Function to Append Messages to Chat
function appendMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    responseOutput.appendChild(messageElement);
    responseOutput.scrollTop = responseOutput.scrollHeight; // Auto-scroll
}

// Function to Generate AI Response
function generateResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    // Keyword-based response system
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        return getRandomResponse(responses.greetings);
    } else if (lowerInput.includes("how are you") || lowerInput.includes("feeling")) {
        return getRandomResponse(responses.emotions);
    } else if (lowerInput.includes("what") || lowerInput.includes("why") || lowerInput.includes("how")) {
        return getRandomResponse(responses.questions);
    } else if (lowerInput.includes("fact") || lowerInput.includes("tell me something")) {
        return getRandomResponse(responses.facts);
    } else {
        return getRandomResponse(responses.unknown);
    }
}

// Predefined Responses
const responses = {
    greetings: ["Hello! How's your day?", "Hey there! What’s on your mind?", "Hi! Ready to chat?"],
    emotions: ["I'm here for you. How are you feeling?", "I hope you're doing well. What's been going on?", "If you're feeling down, I'm all ears!"],
    questions: ["That's a really interesting question! Can you elaborate?", "Hmm, let me think about that. What do you think?", "Great question! Let's break it down."],
    facts: ["Did you know the Eiffel Tower grows in summer?", "Octopuses have three hearts!", "Fun fact: Humans share 60% of their DNA with bananas!"],
    unknown: ["I'm not sure I understand. Can you explain further?", "That’s interesting! Tell me more so I can learn.", "Hmm, I don't have an answer for that yet."]
};

// Function to Pick a Random Response
function getRandomResponse(category) {
    return category[Math.floor(Math.random() * category.length)];
}

// Initialize Chat with a Welcome Message
document.addEventListener("DOMContentLoaded", function () {
    appendMessage("JibAI", "Hello! How can I help you today?");
});