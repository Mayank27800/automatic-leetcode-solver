const {
    getQuestionCount,
    selectQuestions
} = require("../questions/questionSelector");

const {
    getQuestions
} = require("../leetcode/questionService");

const {
    generateSolution
} = require("../ai/solutionGenerator");

async function startALS() {
    console.log("ALS engine started");

    const questions = await getQuestions();

    console.log(`Retrieved ${questions.length} LeetCode questions`);

    const questionCount = getQuestionCount();

    const selectedQuestions = selectQuestions(
        questions,
        questionCount
    );

    console.log(`Selected ${questionCount} questions`);

    const results = [];

    for (const question of selectedQuestions) {
        console.log(`Generating solution for: ${question.title}`);

        const solution = await generateSolution(question);

        console.log(`Solution generated for: ${question.title}`);

        results.push({
            question,
            solution
        });
    }

    return {
        success: true,
        message: "ALS solutions generated",
        questionCount,
        results
    };
}

module.exports = {
    startALS
};