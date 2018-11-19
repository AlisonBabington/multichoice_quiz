import * as types from '../actiontypes/quiz';
import { answers } from './answers';

describe('answer reducer', () => {
  it('should handle ANSWERS LOADED', () => {
    expect(
      answers([], {
        type: types.ANSWERS_LOADED,
        answers: ["one", "two"]
      })
    ).toEqual(
      {
        answers: ["one", "two"]
      }
    )
  })
})