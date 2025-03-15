console.log("JibAI script active");

const userInputField = document.getElementById('user-input');

const sendButton = document.getElementById('send-button');
const responseOutput = document.getElementById('response-output');

sendButton.addEventListener('click', handleUserInput);

function handleUserInput() {
  const userInput = userInputField.value.trim();
  if (userInput !== '') {
    const response = generateResponse(userInput);
    responseOutput.innerHTML += `<p>You: ${userInput}</p><p>ChatAI: ${response}</p>`;
    userInputField.value = '';
  }
}

function generateResponse(userInput) {
  const lowerInput = userInput.toLowerCase();
  let response;
  const responses = {
    "greet": ["Hello!", "Hi there!", "Welcome!"],
    "help": ["How can I help?", "What do you need?", "I'm here to assist!"],
    "unknown": ["That's interesting!", "I'm not sure about that.", "Can you please rephrase?"],
    "what": ["I can answer questions on various topics! What specifically?", "Feel free to ask me anything!"],
    "time": ["Current time is: " + new Date().toLocaleTimeString()]
  };
  if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
    response = responses["greet"][Math.floor(Math.random() * responses["greet"].length)];
  } else if (lowerInput.includes("help") || lowerInput.includes("assist")) {

    response = responses["help"][Math.floor(Math.random() * responses["help"].length)];

  } else if (lowerInput.includes("what")) {
    response = responses["what"][Math.floor(Math.random() * responses["what"].length)];
  } else if (lowerInput.includes("time")) {
    response = responses["time"][0];
  } else {
    response = responses["unknown"][Math.floor(Math.random() * responses["unknown"].length)];
  }
  return response;
}