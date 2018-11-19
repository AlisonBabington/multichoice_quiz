import * as types from '../actiontypes/quiz';
import { user } from './user';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(user(undefined, {})).toEqual(
      { }
    )
  })

  it('should handle USER_NAME_INPUTTEDD', () => {
    expect(
      user([], {
        type: types.USER_NAME_INPUTTED,
        score: 0,
        name: "Charlie"
      })
    ).toEqual(
      {
        score: 0,
        name: "Charlie"
      }
    )
  })
})



