export function scoreAnswers(option) {
    return {
        type: 'ANSWER_MARKED',
        option
    }
}