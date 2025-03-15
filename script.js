// script.js file

console.log("JibAI script active");
const userInputField = document.getElementById('user-input');

const submitButton = document.getElementById('submit-button');
const responseOutput = document.getElementById('response-output');

submitButton.addEventListener('click', handleUserInput);

function handleUserInput() {
  const userInput = userInputField.value.trim();
  if (userInput !== '') {
    generateResponse(userInput);
  }
}
  function generateResponse(userInput) {

  const responses = {
    "greet": ["Hello!", "Hi there!", "Welcome!"],
    "help": ["How can I help?", "What do you need?", "I'm here to assist!"],
    "unknown": ["That's interesting!", "I'm not sure about that.", "Can you please rephrase?"]
  };
  const lowerInput = userInput.toLowerCase();
  let response;
  if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
    response = responses["greet"][Math.floor(Math.random() * responses["greet"].length)];
  } else if (lowerInput.includes("help") || lowerInput.includes("assist")) {
    response = responses["help"][Math.floor(Math.random() * responses["help"].length)];
  } else {
    response = responses["unknown"][Math.floor(Math.random() * responses["unknown"].length)];
  }
  responseOutput.innerText = response;
  userInputField.value = '';
}