const axios = require("axios");

const LEETCODE_API_URL = "https://leetcode.com/graphql/";

async function getQuestions() {
    const query = `
        query problemsetQuestionList(
            $categorySlug: String,
            $limit: Int,
            $skip: Int,
            $filters: QuestionListFilterInput
        ) {
            problemsetQuestionList: questionList(
                categorySlug: $categorySlug
                limit: $limit
                skip: $skip
                filters: $filters
            ) {
                total: totalNum
                questions: data {
                    questionFrontendId
                    title
                    titleSlug
                    difficulty
                    isPaidOnly
                }
            }
        }
    `;

    const variables = {
        categorySlug: "",
        limit: 50,
        skip: 0,
        filters: {}
    };

    const response = await axios.post(
        LEETCODE_API_URL,
        {
            query,
            variables,
            operationName: "problemsetQuestionList"
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    const questions =
        response.data.data.problemsetQuestionList.questions;

    return questions
        .filter((question) => !question.isPaidOnly)
        .map((question) => ({
            id: question.questionFrontendId,
            title: question.title,
            slug: question.titleSlug,
            difficulty: question.difficulty,
            url: `https://leetcode.com/problems/${question.titleSlug}/`
        }));
}

module.exports = {
    getQuestions
};