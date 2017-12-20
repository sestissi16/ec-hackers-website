import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import Header from './Header.js';
import HomePage from './HomePage.js'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/Home" render={() => (
          <HomePage />
        )}/>
          

      </div>
    );
  }
}

export default App;
