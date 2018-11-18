export function userName(state = {}, action) {
    switch (action.type) {
        case 'USER_NAME_INPUTTED':
            return {
                ...state,
                userPosition: 1,
                name: action.name
            }
        default:
            return state;
    }
}