import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

  
//initialise store
const store = configureStore();


//makes store available to all containers without passing it
render (
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
);


serviceWorker.unregister();
