function getQuestionCount() {
    const min = 1;
    const max = 25;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function selectQuestions(questions, count) {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, count);
}

module.exports = {
    getQuestionCount,
    selectQuestions
};