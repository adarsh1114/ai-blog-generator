const express = require("express");
const router = express.Router();
const { generateBlog } = require("../services/openai");

router.post("/generate-blog", async (req, res) => {
  const { topic, tone } = req.body;

  if (!topic || !tone) {
    return res.status(400).json({ error: "Topic and tone are required." });
  }

  try {
    const blog = await generateBlog(topic, tone);
    res.json({ blog });
  } catch (error) {
    console.error("Error generating blog:", error.message);
    res.status(500).json({ error: "Failed to generate blog. Please try again." });
  }
});

module.exports = router;
