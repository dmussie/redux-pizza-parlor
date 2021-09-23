import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function App() {
  //GET request for orders
  const dispatch = useDispatch();
  
  const fetchOrders = () => {
    axios({
      method: 'GET',
      url:'/api/order',
    }).then(response => {
      console.log(response.data);
      dispatch({
        type: 'SET_ORDER_LIST',
        payload: response.data
      })
    })
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>

        <Route exact path="/">
          <img src='images/pizza_photo.png' />
          <p>Pizza is great.</p>
        </Route>

        <Route exact path="/order">
          <p>Pizza is order.</p>
        </Route>

        <Route exact path="/checkout">
          <p>Pizza is checkout.</p>
        </Route>

        <Route exact path="/admin">
          <p>Pizza is admin.</p>
        </Route>
        
      </Router>
  
      
  
    </div>
  );
}

export default App;
