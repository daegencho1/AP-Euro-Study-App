require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

// In development the React dev server is on a different port, so allow it.
// In production everything is same-origin (Express serves the build), so CORS
// is only needed locally.
if (!fs.existsSync(path.join(__dirname, "build"))) {
  app.use(cors({ origin: "http://localhost:3000" }));
}

app.use(express.json());

// Proxy endpoint — forwards requests to the Anthropic API.
// The API key lives only in process.env and is never sent to the browser.
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

// Serve the React production build when it exists (i.e. in production).
const buildDir = path.join(__dirname, "build");
if (fs.existsSync(buildDir)) {
  app.use(express.static(buildDir));
  // Send index.html for any non-API route so client-side routing works.
  app.get("/(.*)", (req, res) => {
    res.sendFile(path.join(buildDir, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
