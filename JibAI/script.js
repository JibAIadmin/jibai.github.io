// Select elements
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const responseOutput = document.getElementById("response-output");

// Predefined responses
const responses = {
    "hello": "Hi there! How can I assist you?",
    "how are you": "I'm just code, but thanks for asking!",
    "what's your name": "I'm JibAI, your intelligent assistant!",
    "bye": "Goodbye! Have a great day!",
};

// Function to handle user input
function handleUserInput() {
    const userMessage = userInput.value.trim().toLowerCase(); // Convert to lowercase for matching

    if (userMessage !== "") {
        responseOutput.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

        // Check if we have a predefined response
        const botResponse = responses[userMessage] || "I don't understand that yet.";
        
        responseOutput.innerHTML += `<p><strong>JibAI:</strong> ${botResponse}</p>`;
        userInput.value = ""; // Clear input
    }
}

// Event listener for button click
sendButton.addEventListener("click", handleUserInput);

// Event listener for pressing Enter key
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleUserInput();
    }
});