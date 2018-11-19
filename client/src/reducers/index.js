import { combineReducers } from 'redux';
import { questions } from './questions';
import { answers } from './answers';
import { user } from './user';

export default combineReducers({
    questions,
    answers,
    user,
});