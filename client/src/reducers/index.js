import { combineReducers } from 'redux';
import { questions } from './questions';
import { answers } from './answers';
import { userName } from './userName';



export default combineReducers({
    questions,
    answers,
    userName,
});