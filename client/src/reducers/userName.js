export function userName(state = {}, action) {
    switch (action.type) {
        case 'USER_NAME_INPUTTED':
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
}