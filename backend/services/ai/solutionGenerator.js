const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
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

    const response = await client.messages.create({
        model: "claude-sonnet-4-5",
        max_tokens: 4096,
        messages: [
            {
                role: "user",
                content: prompt
            }
        ]
    });

    return response.content[0].text;
}

module.exports = {
    generateSolution
};