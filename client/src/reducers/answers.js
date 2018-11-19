export function answers(state = {}, action) {
    switch (action.type) {
        case 'ANSWERS_LOADED':
            return {
                ...state,
                answers: action.answers
            }
        default:
            return state;
    }
}