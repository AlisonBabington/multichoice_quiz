export function answers(state = {}, action) {
    switch (action.type) {
        case 'ANSWERS_LOADED':
           console.log(action.answers)
            return action.answers;
        default:
            return state;
    }
}