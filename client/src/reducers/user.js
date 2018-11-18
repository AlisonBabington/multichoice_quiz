export function userName(state = {}, action) {
    switch (action.type) {
        case 'USER_NAME_INPUTTED':
            return {
                ...state, 
                score: 0,
                gamePlay: true,
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