const express = require("express");
const app = express();
const db = require("./db"); // this is your db.js file
const PORT = 3000;

// Middlewares (if any)
app.use(express.json());

// ROUTE: Health Check
app.get("/status", (req, res) => {
  db.query("SELECT 1", (err, result) => {
    if (err) {
      return res.status(500).json({ server: "🟢", database: "🔴 FAILED" });
    }
    res.json({ server: "🟢", database: "🟢 CONNECTED" });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});