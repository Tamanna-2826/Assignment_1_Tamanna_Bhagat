const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/fetch-google", async (req, res) => {
  try {
    const response = await fetch("https://www.google.com");
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

// Start the server
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
