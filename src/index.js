import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const pizzaReducer = (state = [], action) => {
    console.log('in pizzaReducer');
    return state;
}

const orderReducer = (state = [], action) => {
    console.log('in orderReducer');
    return state;
}

const cartReducer = (state = [], action) => {
    console.log('in cartReducer');
    return state;
}


const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        orderReducer,
        cartReducer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
