import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const pizzaReducer = (state = [], action) => {
    if (action.type === 'SET_PIZZA_LIST') {
        return action.payload;
    }
    console.log('in pizzaReducer');
    return state;
}

const orderReducer = (state = {}, action) => {
    console.log('in orderReducer');
    if (action.type === 'CLEAR_ALL_CARTS') {
        return {};
    }
    if (action.type === 'SET_ORDER_LIST') {
        return action.payload;
    }
    return state;
}

const cartReducer = (state = [], action) => {
    console.log('in cartReducer');
    if (action.type === 'CLEAR_ALL_CARTS') {
        return [];
        console.log('inch cartReducer');
    }
    if (action.type === 'ADD_TO_CART') {
        return [...state, action.payload];
    }
    return state;
}

const totalCostReducer = (state = 0, action) => {
    if (action.type === 'ADD_TO_CART') {
        let currentCost = parseFloat(action.payload.price);
        console.log('currentCost', currentCost);
        
        return state + currentCost;
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        orderReducer,
        cartReducer,
        totalCostReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
