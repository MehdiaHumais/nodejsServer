// Initialize Express app
const express = require("express");
const app = express();
const PORT = 5000;
// Define routes
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// Handle 404 (not found)
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
