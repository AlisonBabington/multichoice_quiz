import * as types from '../actiontypes/quiz';
import { questions } from './questions';


describe('question reducer', () => {
  it('should return the initial state', () => {
    expect(questions(undefined, {})).toEqual(
      { }
    )
  })

  it('should handle QUESTIONS LOADED', () => {
    expect(
      questions([], {
        type: types.QUESTIONS_LOADED,
        questions: ["one", "two"]
      })
    ).toEqual(
      {
        questions: ["one", "two"]
      }
    )
  })
})