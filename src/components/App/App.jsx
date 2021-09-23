import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPizzaList();
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

        <Route exact path="/">
          <PizzaList />
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
