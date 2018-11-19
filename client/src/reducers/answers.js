export function answers(state = {}, action) {
    console.log(state)
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