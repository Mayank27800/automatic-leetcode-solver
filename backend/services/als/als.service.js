const {
    getQuestionCount,
    selectQuestions
} = require("../questions/questionSelector");

const {
    getQuestions
} = require("../leetcode/questionService");

async function startALS() {
    console.log("ALS engine started");

    const questions = await getQuestions();

    console.log(`Retrieved ${questions.length} LeetCode questions`);

    const questionCount = getQuestionCount();

    const selectedQuestions = selectQuestions(
        questions,
        questionCount
    );

    console.log(`Selected ${questionCount} questions:`);

    selectedQuestions.forEach((question, index) => {
        console.log(
            `${index + 1}. ${question.title} (${question.difficulty})`
        );
    });

    return {
        success: true,
        message: "ALS started",
        questionCount,
        questions: selectedQuestions
    };
}

module.exports = {
    startALS
};