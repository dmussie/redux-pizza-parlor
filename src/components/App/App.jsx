import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import CustomerForm from '../CustomerForm/CustomerForm';
import PizzaList from '../PizzaList/PizzaList';
import PizzaCheckout from '../PizzaCheckout/PizzaCheckout';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import Admin from '../Admin/Admin';


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

  useEffect(() => {
    fetchPizzaList();
    fetchOrders();
  },[]);
  
  const fetchPizzaList = () => {
    axios.get('/api/pizza').then(response => {
      console.log(response.data);
      const action = {type: 'SET_PIZZA_LIST', payload: response.data}
      dispatch(action);
    });
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
        <Route path="/" exact>
          <PizzaList 
          fetchPizzaList={fetchPizzaList}
          />
        </Route>
        <Route path="/order">
          <p>Pizza is order.</p>
          <CustomerForm />
        </Route>

        <Route exact path="/checkout">
          <PizzaCheckout />
        </Route>

        <Route exact path="/admin">
          <p>Pizza is admin.</p>
          <Admin ></Admin>
        </Route>
        
      </Router>
  
      
  
    </div>
  );
}

export default App;
