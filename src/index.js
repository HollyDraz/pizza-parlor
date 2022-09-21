import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// additional imports needed for redux store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// reducers needed for Checkout component

const customerName = (state = 'Eliot Test', action) => {
    console.log('customerName reducer', action);
    if(action.type === 'SET_NAME'){
        return action.payload;
    } else if(action.type === 'CLEAR_ALL'){
        return '';
    }
    return state;
} // end customerName

const streetAddress = (state = '4000 Chex Mix Way', action) => {
    console.log('streetAddress reducer', action);
    if(action.type === 'SET_STREET'){
        return action.payload;
    } else if(action.type === 'CLEAR_ALL'){
        return '';
    }
    return state;
} // end streetAddress

const city = (state = 'Corvallis, OR', action) => {
    console.log('city reducer', action);
    if(action.type === 'SET_CITY'){
        return action.payload;
    } else if (action.type === 'CLEAR_ALL'){
        return '';
    }
    return state;
} // end city

const zipCode = (state = '11111', action) => {
    console.log('zipCode reducer', action);
    if(action.type === 'SET_ZIP'){
        return action.payload;
    } else if (action.type === 'CLEAR_ALL'){
        return '';
    }
    return state;
} // end zipCode

const totalCost = (state = 39.00, action) => {
    console.log('totalCost reducer', action);
    if(action.type === 'CLEAR_ALL'){
        return '';
    }
    return state;
} // end totalCost

const getPizza = (state = 'Delivery', action) => {
    console.log('getPizza reducer', action);
    if(action.type === 'CLEAR_ALL'){
        return '';
    }
    return state;
} // end getPizza

const order = (state = [{type: 'bambini', price: '5', quantity: 1}, {type: 'maximus', price: 14.00, quantity: 1}, {type: 'napoli', price: 10.00, quantity: 1}, {type: 'tuscana', price: 10.00, quantity: 1}], action) => {
    console.log('order reducer', action);
    return state;
} // end order

const storeInstance = createStore(
    combineReducers(
        {
            customerName,
            streetAddress,
            city,
            zipCode,
            totalCost,
            getPizza,
            order
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={(storeInstance)}><App /></Provider>, document.getElementById('root'));
