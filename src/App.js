import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import Header from './Header.js';
import HomePage from './HomePage.js'; 
import SignUp from './SignUp.js';
import Info from './Info.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/Home" render={() => (
          <HomePage />
        )}/>
        <Route path="/SignUp" render={() => (
          <SignUp />
        )}/>
        <Route path="/Info" render={() => (
          <Info />
        )}/>
        
      </div>
    );
  }
}

export default App;
