import React from 'react';
import { render } from 'react-dom'
import './index.css';
import Main from './containers/Main';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//initialise store
const store = configureStore();


//makes store available to all containers without passing it
render (
    <Provider store={store}>
             <Main/>
    </Provider>,
document.getElementById('root')
);

store.dispatch({ type: 'GET_QUESTIONS' })

serviceWorker.unregister();
