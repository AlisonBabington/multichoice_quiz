

export function questions(state = {}, action) {
    switch (action.type) {
        case 'QUESTIONS_LOADED':
            return {
                ...state,
                questions: action.questions
            }
        default:
            return state;
    }
}