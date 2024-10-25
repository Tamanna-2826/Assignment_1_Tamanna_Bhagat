const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page of main.js!");
});

app.get("/main", (req, res) => {
  res.send("Hello, this is a simple GET request!");
});

app.listen(8000, () => {
  console.log("Server is running on 8000");
});
