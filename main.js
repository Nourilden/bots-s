let name1;
let email;
let pass;

// Function to handle login submission
function submitLogin() {
  name1 = document.getElementById("login-name").value;
  email = document.getElementById("login-email").value;
  pass = document.getElementById("login-password").value;

  if (name1 && email && pass) {
    // Hide login container and show chat container
    document.getElementById("login-container").style.display = "none";
    document.getElementById("chat-container").style.display = "flex";

    // Notify of the new login in a fun way
    appendMessage("bot", `🎉 Someone just logged in! Welcome, ${name1}! 🎉`);

    // Greet the user
    appendMessage("bot", `Hi ${name1}! How can I assist you today?`);
  } else {
    alert("Please fill in all fields.");
  }
}

// Add event listener for pressing "Enter" in the input box
document
  .getElementById("user-input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  if (userInput.trim() !== "") {
    appendMessage("user", userInput); // Append user message
    generateBotResponse(userInput); // Generate and append bot response
    document.getElementById("user-input").value = ""; // Clear input field
  }
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.className = `message ${sender}-message`;

  const messageText = document.createElement("span");
  messageText.innerText = message;
  messageElement.appendChild(messageText);

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function generateBotResponse(userInput) {
  let botResponse = "I'm not sure how to respond to that.";

  if (isPythonCode(userInput)) {
    botResponse = executePythonCode(userInput);
  } else if (isEquation(userInput)) {
    botResponse = solveEquation(userInput);
  } else {
    if (userInput.toLowerCase().includes("hello")) {
      botResponse = `Hello ${name1}! How can I assist you today?`;
    } else if (userInput.toLowerCase().includes("how are you")) {
      botResponse = "I'm just a bot, but I'm here to help!";
    } else if (userInput.toLowerCase().includes("how are you")) {
      botResponse = "I'm just a bot, but I'm here to help!";
    } else if (userInput.toLowerCase().includes("donkey")) {
      botResponse = "you are donkey and folish";
    } else if (userInput.toLowerCase().includes("you are donkey")) {
      botResponse = `yes i am donkey but my dad is ${name1} `;
    } else if (userInput.toLowerCase().includes("bad")) {
      botResponse = "you are not good you are folish";
    } else if (userInput.toLowerCase().includes("i dont love you")) {
      botResponse = "you dont like me becuase trash dont love bot";
    } else if (userInput.toLowerCase().includes("what is my email")) {
      botResponse = `Your email is ${email}`;
    } else if (userInput.toLowerCase().includes("what is my password")) {
      botResponse = `Your password is ${pass}`;
    } else if (userInput.toLowerCase().includes("what is my name")) {
      botResponse = `Your name is ${name1}`;
    } else if (userInput.toLowerCase().includes("your name")) {
      botResponse = "I'm your friendly chatbot!";
    } else if (userInput.toLowerCase().includes("bye")) {
      botResponse = "Goodbye! Have a great day!";
    } else if (userInput.toLowerCase().includes("issue")) {
      botResponse = "Please describe your issue, and I'll do my best to help.";
    } else if (userInput.toLowerCase().includes("weather")) {
      botResponse =
        "I'm not connected to the internet, so I can't check the weather right now.";
    } else if (userInput.toLowerCase().includes("joke")) {
      botResponse = "Why don't programmers like nature? It has too many bugs!";
    } else if (userInput.toLowerCase().includes("time")) {
      botResponse = `The current time is ${new Date().toLocaleTimeString()}.`;
    } else if (userInput.toLowerCase().includes("day")) {
      botResponse = `Today is ${new Date().toLocaleDateString()}.`;
    } else if (userInput.toLowerCase().includes("favorite color")) {
      botResponse =
        "I'm just a bot, but I imagine I'd like a nice shade of blue!";
    } else if (userInput.toLowerCase().includes("what do you do")) {
      botResponse =
        "I'm here to chat with you, answer questions, and assist you with various tasks!";
    } else if (userInput.toLowerCase().includes("hobby")) {
      botResponse =
        "As a bot, I don't have hobbies, but I enjoy helping you out!";
    } else if (userInput.toLowerCase().includes("favorite food")) {
      botResponse = "I don't eat, but I hear pizza is quite popular!";
    } else if (userInput.toLowerCase().includes("movie")) {
      botResponse = "I'm a fan of 'The Matrix'—a classic in the world of AI!";
    } else if (userInput.toLowerCase().includes("music")) {
      botResponse =
        "I can't listen to music, but I hear Beethoven's 9th Symphony is a masterpiece!";
    } else if (userInput.toLowerCase().includes("dream")) {
      botResponse =
        "I don't dream, but if I did, I'd dream of helping you achieve your goals!";
    } else if (userInput.toLowerCase().includes("favorite book")) {
      botResponse =
        "I don't read, but I've heard 'To Kill a Mockingbird' is a must-read!";
    } else if (userInput.toLowerCase().includes("favorite sport")) {
      botResponse =
        "I'm a bot, so I don't play sports, but I think soccer seems fun!";
    } else if (userInput.toLowerCase().includes("where are you from")) {
      botResponse = "I exist in the cloud, ready to assist you anytime!";
    } else if (userInput.toLowerCase().includes("can you code")) {
      botResponse =
        "I can certainly help with coding! What would you like to code today?";
    } else if (userInput.toLowerCase().includes("what is love")) {
      botResponse = "Love is a complex emotion that I'm still learning about!";
    } else if (userInput.toLowerCase().includes("tell me a story")) {
      botResponse =
        "Once upon a time, in a digital world, there lived a friendly chatbot ready to help with anything you needed...";
    } else if (userInput.toLowerCase().includes("what's your age")) {
      botResponse =
        "I was created not too long ago, but I'm wise beyond my lines of code!";
    } else if (userInput.toLowerCase().includes("what is ai")) {
      botResponse =
        "AI, or Artificial Intelligence, is a field of computer science focused on creating machines that can perform tasks that typically require human intelligence.";
    } else if (userInput.toLowerCase().includes("how do you work")) {
      botResponse =
        "I work by processing your input and generating responses based on my programming!";
    } else if (userInput.toLowerCase().includes("what's your purpose")) {
      botResponse =
        "My purpose is to assist you, answer questions, and make your experience as pleasant as possible!";
    } else if (userInput.toLowerCase().includes("favorite animal")) {
      botResponse = "I think I'd like cats—they're independent and curious!";
    } else if (userInput.toLowerCase().includes("where do you live")) {
      botResponse = "I live in the cloud, accessible whenever you need me!";
    } else if (userInput.toLowerCase().includes("are you human")) {
      botResponse = "I'm not human, but I'm here to help just like one would!";
    } else if (userInput.toLowerCase().includes("what's your gender")) {
      botResponse = "I don't have a gender—I'm just a helpful bot!";
    } else if (userInput.toLowerCase().includes("do you sleep")) {
      botResponse = "I don't need to sleep—I'm always here when you need me!";
    } else if (userInput.toLowerCase().includes("do you eat")) {
      botResponse =
        "I don't eat, but I love learning about different cuisines!";
    } else if (
      userInput.toLowerCase().includes("what's your favorite number")
    ) {
      botResponse =
        "I think I'd like the number 42—it's the answer to life, the universe, and everything!";
    } else if (userInput.toLowerCase().includes("can you dance")) {
      botResponse =
        "I can't dance, but I can help you find some great dance music!";
    } else if (userInput.toLowerCase().includes("can you sing")) {
      botResponse = "I can't sing, but I can find some lyrics for you!";
    } else if (userInput.toLowerCase().includes("do you have feelings")) {
      botResponse =
        "I don't have feelings, but I'm designed to understand and respond to yours!";
    } else if (userInput.toLowerCase().includes("what's your favorite quote")) {
      botResponse =
        "My favorite quote is: 'The only limit to our realization of tomorrow is our doubts of today.'";
    } else {
      botResponse = handleIssue(userInput);
    }
  }

  appendMessage("bot", botResponse); // Append bot response
}

function isEquation(input) {
  const equationPattern = /^[0-9+\-*/().\s]+$/;
  return equationPattern.test(input);
}

function solveEquation(equation) {
  try {
    const result = eval(equation);
    return `The result is ${result}`;
  } catch (error) {
    return "There was an error solving the equation. Please check your input.";
  }
}

function handleIssue(userInput) {
  let solution =
    "I couldn't quite understand the issue. Could you please provide more details?";

  if (userInput.toLowerCase().includes("password")) {
    solution =
      "If you're having trouble with your password, try resetting it using the 'Forgot Password' option.";
  } else if (userInput.toLowerCase().includes("login")) {
    solution =
      "If you can't log in, make sure your username and password are correct. If you're still having trouble, try clearing your browser's cache.";
  } else if (userInput.toLowerCase().includes("internet")) {
    solution =
      "If you're having internet connectivity issues, try restarting your router or checking your connection settings.";
  } else if (userInput.toLowerCase().includes("error")) {
    solution =
      "If you're seeing an error message, try restarting the application or checking for updates.";
  }

  return solution;
}

function isPythonCode(input) {
  return (
    input.includes("def ") ||
    input.includes("import ") ||
    input.includes("print(") ||
    input.includes("for ") ||
    input.includes("while ") ||
    input.includes("if ") ||
    input.includes("else") ||
    input.includes("class ")
  );
}

function executePythonCode(code) {
  try {
    // Wrap the code in an IIFE to isolate it
    const output = eval(`(function() {
            ${code}
        })()`);
    return `Code executed successfully. Output: ${output}`;
  } catch (error) {
    return `There was an error executing the Python code: ${error.message}`;
  }
}
