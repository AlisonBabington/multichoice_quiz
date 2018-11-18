import { combineReducers } from 'redux';
import { questions } from './questions';
import { answers } from './answers';
import { userName } from './userName';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
    questions,
    answers,
    userName,
    form: formReducer
});