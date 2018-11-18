export function markingAnswers(state = {}, action) {
    console.log(action)
    switch (action.type) {
        case 'ANSWER_MARKED':
        return {
            ...state,
            score: state.score + 1
        }
    }
}