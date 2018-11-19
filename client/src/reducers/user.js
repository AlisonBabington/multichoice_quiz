export function user(state = {}, action) {
    switch (action.type) {
        case 'USER_NAME_INPUTTED':
            return {
                ...state,
                score: 0,
                name: action.name
            }
        case 'ANSWER_MARKED': {
            return {
                ...state,
                score: state.score + action.option,
            }
        }
        default:
            return state;
    }
}