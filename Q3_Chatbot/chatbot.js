module.exports.ChatbotReply = function (message) {
  const Bot_Age = 25;
  const Bot_Name = "ChatBot-X";
  const Bot_Country = "India";

  message = message.toLowerCase();

  if (
    message.includes("hi") ||
    message.includes("hello") ||
    message.includes("hey") ||
    message.includes("welcome")
  ) {
    return `Hello! I am ${Bot_Name}. How can I assist you today?`;
  } else if (message.includes("age") && message.includes("your")) {
    return `I am ${Bot_Age} years old.`;
  } else if (
    message.includes("how") &&
    message.includes("are") &&
    message.includes("you")
  ) {
    return "I'm doing great, thanks for asking! How about you?";
  } else if (
    message.includes("where") &&
    message.includes("live") &&
    message.includes("you")
  ) {
    return `I live in the digital realm, but I was created in ${Bot_Country}.`;
  } else if (
    message.includes("what") &&
    message.includes("your") &&
    message.includes("name")
  ) {
    return `My name is ${Bot_Name}. Nice to meet you!`;
  } else if (message.includes("thanks") || message.includes("thank you")) {
    return "You're welcome! I'm here to help whenever you need me.";
  } else if (
    message.includes("ai") ||
    message.includes("artificial intelligence")
  ) {
    return "Artificial Intelligence is revolutionizing industries like healthcare, finance, and automotive. It’s an exciting field!";
  } else if (message.includes("cloud computing")) {
    return "Cloud computing is the backbone of modern IT infrastructure. AWS, Azure, and Google Cloud are the top providers.";
  } else if (message.includes("career") && message.includes("advice")) {
    return "In the IT industry, staying updated with new technologies and building projects are the keys to a successful career!";
  }

  return "Hmm, I didn't catch that. Cousld you please clarify?";
};
