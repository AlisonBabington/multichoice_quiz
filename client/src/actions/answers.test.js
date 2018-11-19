import * as actions from './answers';
import * as types from '../actiontypes/quiz'

describe('actions', () => {
  it('return an array of answers', () => {
    const answers = ["one", "two", "three"]
    const expectedAction = {
      type: types.ANSWERS_LOADED,
      answers
    }
    expect(actions.setAnswersData(answers)).toEqual(expectedAction)
  })
})