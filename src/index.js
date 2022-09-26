import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// additional imports needed for redux store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// reducers needed for Checkout component

const name = (state = '', action) => {
      if (action.type === 'SET_NAME') {
          // dispatch will have type of 'SET_NAME'
          // and payload with the value to set
          return action.payload;
      } else if (action.type === 'CLEAR_ALL') {
          return '';
      }
      return state;
  }

  const address = (state = '', action) => {
      if (action.type === 'SET_ADDRESS') {
          // dispatch will have type of 'SET_ADDRESS'
          // and payload with the value to set
          return action.payload;
      } else if (action.type === 'CLEAR_ALL') {
          return '';
      }
      return state;
  }

  const city = (state = '', action) => {
      if (action.type === 'SET_CITY') {
          // dispatch will have type of 'SET_CITY'
          // and payload with the value to set
          return action.payload;
      } else if (action.type === 'CLEAR_ALL') {
          return '';
      }
      return state;
  }

  const zip = (state = '', action) => {
      if (action.type === 'SET_ZIP') {
          // dispatch will have type of 'SET_ZIP'
          // and payload with the value to set
          return action.payload;
      } else if (action.type === 'CLEAR_ALL') {
          return '';
      }
      return state;
  }
// const customerName = (state = 'Eliot Test', action) => {
//     console.log('customerName reducer', action);
//     if(action.type === 'SET_NAME'){
//         return action.payload;
//     } else if(action.type === 'CLEAR_ALL'){
//         return '';
//     }
//     return state;
// } // end customerName

// const streetAddress = (state = '4000 Chex Mix Way', action) => {
//     console.log('streetAddress reducer', action);
//     if(action.type === 'SET_STREET'){
//         return action.payload;
//     } else if(action.type === 'CLEAR_ALL'){
//         return '';
//     }
//     return state;
// } // end streetAddress

// const city = (state = 'Corvallis, OR', action) => {
//     console.log('city reducer', action);
//     if(action.type === 'SET_CITY'){
//         return action.payload;
//     } else if (action.type === 'CLEAR_ALL'){
//         return '';
//     }
//     return state;
// } // end city

// const zipCode = (state = '11111', action) => {
//     console.log('zipCode reducer', action);
//     if(action.type === 'SET_ZIP'){
//         return action.payload;
//     } else if (action.type === 'CLEAR_ALL'){
//         return '';
//     }
//     return state;
// } // end zipCode

// action type needs added to so that it updates when products are selected
const totalCost = (state = 0, action) => {
    console.log('totalCost reducer', action);
    if(action.type === 'SET_TOTAL_COST'){
        return state + action.payload;
    } else if (action.type === 'CLEAR_ALL'){
        return 0;
    }
    return state;
} // end totalCost

// need to include a place on PizzaOrderPage for use to choose delivery or pickup
// const getPizza = (state = 'Delivery', action) => {
//     console.log('getPizza reducer', action);
//     if(action.type === 'CLEAR_ALL'){
//         return '';
//     }
//     return state;
// } // end getPizza
  const delivery = (state = '', action) => {
      if (action.type === 'SET_DELIVERY') {
          // dispatch will have type of 'SET_DELIVERY'
          // and payload with the value to set
          return action.payload;
      } else if (action.type === 'CLEAR_ALL') {
          return '';
      }
      return state;
  }

const order = (state = [], action) => {
    console.log('order reducer', action);
    if(action.type === 'SET_ORDER'){
        return [...state, action.payload];
    } else if(action.type === 'CLEAR_ALL'){
        return [];
    }
    return state;
} // end order

const storeInstance = createStore(
    combineReducers(
        {
            name,
            address,
            city,
            zip,
            totalCost,
            delivery,
            order
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={(storeInstance)}><App />
</Provider>, document.getElementById('root'));
