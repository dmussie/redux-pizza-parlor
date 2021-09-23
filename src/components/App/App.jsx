import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList';

function App() {

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
