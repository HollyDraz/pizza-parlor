import React from 'react';
import axios from 'axios';
import './App.css';
// imports for Route, Link, useHistory, components
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import PizzaOrderPage from '../PizzaOrderPage/PizzaOrderPage.jsx';
import Checkout from '../Checkout/Checkout.jsx';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
    {/* remove image and p tag later. */}
      {/* <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p> */}
      {/* Inserting Router tags below */}
      <Router>
        <Route exact path = "/orderpizza">
          <PizzaOrderPage />
        </Route>
        <Route exact path = "/checkout">
          <Checkout />
        </Route>
      </Router>
    </div>
  );
}

export default App;
