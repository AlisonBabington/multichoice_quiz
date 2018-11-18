

export function questions(state = {}, action) {
    switch (action.type) {
        case 'QUESTIONS_LOADED':
            return {
                ...state,
                questions: action.questions
            }
        case 'CURRENT_QUESTION':
        console.log(action.question)
            return {
                ...state,
                currentQuestion : action.question
            }
        default:
            return state;
    }
}