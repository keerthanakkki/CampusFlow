require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

// 🔹 Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// 🔥 AI FUNCTION
async function parseTask(text) {
  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "openai/gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            'Extract task, date (YYYY-MM-DD), and time (HH:MM) from the sentence. Return ONLY JSON like {"task":"","date":"","time":""}',
        },
        {
          role: "user",
          content: text,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "CampusFlow",
      },
    },
  );

  const content = response.data.choices[0].message.content;
  const cleaned = content.replace(/```json|```/g, "").trim();

  return JSON.parse(cleaned);
}

// 🚀 MAIN API
app.post("/task", async (req, res) => {
  try {
    const { text, phone } = req.body;

    const parsed = await parseTask(text);

    console.log("AI Output:", parsed);

    res.json({
      message: "AI parsed successfully",
      data: parsed,
    });
  } catch (error) {
    console.error("FULL ERROR:", error.response?.data || error.message);

    res.status(500).json({
      error: error.response?.data || error.message,
    });
  }
});

// 🔹 START SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
