

export function questions(state = {}, action) {
    switch (action.type) {
        case 'QUESTIONS_LOADED':
           console.log(action.questions)
            return action.questions;
        default:
            return state;
    }
}