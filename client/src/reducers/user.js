export function userName(state = {}, action) {
   console.log(action)
    switch (action.type) {
        case 'USER_NAME_INPUTTED':
            return {
                ...state, 
                score: 0,
                gamePlay: true,
                userPosition: 1,
                name: action.name
            }
        case 'ANSWER_MARKED': {
            return {
                ...state,
                score: state.score + action.option,
                userPosition: state.userPosition +1
            }
        }
        default:
            return state;
    }
}