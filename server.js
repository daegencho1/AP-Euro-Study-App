require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Single proxy endpoint — forwards the full Anthropic messages request body
// from the React app to the Anthropic API. The API key never leaves the server.
app.post("/api/chat", async (req, res) => {
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.REACT_APP_ANTHROPIC_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error("Proxy error:", err.message);
    res.status(500).json({ error: { message: err.message } });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
