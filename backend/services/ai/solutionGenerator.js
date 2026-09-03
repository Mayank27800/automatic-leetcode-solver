const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function generateSolution(question) {
    const prompt = `
Solve the following LeetCode problem.

Problem:
${question.title}

Difficulty:
${question.difficulty}

Problem URL:
${question.url}

Return only the complete JavaScript solution code.
Do not include markdown code fences.
Do not include explanations.
`;

    const response = await ai.models.generateContent({
       model: "gemini-3.6-flash",
        contents: prompt
    });

    return response.text;
}

module.exports = {
    generateSolution
};