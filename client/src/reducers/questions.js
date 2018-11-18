

export function questions(state = {}, action) {
    switch (action.type) {
        case 'QUESTIONS_LOADED':
            return {
                ...state,
                questions: action.questions
            }
        case 'CURRENT_QUESTION':
            return {
                ...state,
                currentQuestion : action.question
            }
        default:
            return state;
    }
}