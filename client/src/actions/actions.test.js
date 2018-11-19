import * as answerActions from './answers';
import * as questionActions from './questions';
import * as quizActions from './quizzes';
import * as userActions from './user';
import * as types from '../actiontypes/quiz';

describe('answerActions', () => {
  it('return an array of answers', () => {
    const answers = ["one", "two", "three"]
    const expectedAction = {
      type: types.ANSWERS_LOADED,
      answers
    }
    expect(answerActions.setAnswersData(answers)).toEqual(expectedAction)
  })
})

describe('questionActions', () => {
  it('return an array of questions', () => {
    const questions = ["one", "two", "three"]
    const expectedAction = {
      type: types.QUESTIONS_LOADED,
      questions
    }
    expect(questionActions.setQuestionData(questions)).toEqual(expectedAction)
  })
})

describe('quizActions', () => {
  it('returns the chosen answer', () => {
    const option = "hello"
    const expectedAction = {
      type: types.ANSWER_MARKED,
      option
    }
    expect(quizActions.updateScore(option)).toEqual(expectedAction)
  })
})
  
  describe('userActions', () => {
    it('returns the inputted name', () => {
      const name = "James"
      const expectedAction = {
        type: types.USER_NAME_INPUTTED,
        name
      }
      expect(userActions.user(name)).toEqual(expectedAction)
    })
  })