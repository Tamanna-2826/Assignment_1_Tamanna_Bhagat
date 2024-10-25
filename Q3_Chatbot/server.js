const readline = require("readline");
const { ChatbotReply } = require("./chatbot");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion() {
  rl.question("You: ", (userInput) => {
    const botReply = ChatbotReply(userInput);
    console.log("Bot:", botReply);
    askQuestion();
  });
}

console.log("Type something to start the conversation...");
askQuestion();
