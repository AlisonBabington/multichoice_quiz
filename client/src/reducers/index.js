import { combineReducers } from 'redux';
import { questions } from './questions';
import { answers } from './answers';
import { userName } from './user';



export default combineReducers({
    questions,
    answers,
    userName,
});