const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateBlog(topic, tone) {
  const prompt = `Write a well-structured blog article about "${topic}" in a ${tone} tone.

Structure the article with:
1. An engaging introduction
2. 3-5 key points with clear subheadings
3. A compelling conclusion

Make it informative, engaging, and around 600-800 words. Use markdown formatting for headings (## for main headings, ### for subheadings).`;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an expert blog writer who creates well-researched, engaging, and well-structured articles. You always write in the requested tone and format your output in clean markdown.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    max_tokens: 1200,
    temperature: 0.7,
  });

  return completion.choices[0].message.content;
}

module.exports = { generateBlog };
