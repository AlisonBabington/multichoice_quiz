

export function questions(state = {}, action) {
    switch (action.type) {
        case 'QUESTIONS_LOADED':
            return action.questions;
        default:
            return state;
    }
}