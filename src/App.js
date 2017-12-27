import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import Header from './Header.js';
import HomePage from './HomePage.js'; 
import SignUp from './SignUp.js';
import About from './About.js';
import FAQ from './FAQ.js';
import Schedule from './Schedule.js';
import Sponsors from './Sponsors.js';

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
        <Route path="/About" render={() => (
          <About />
        )}/>
        <Route path="/FAQ" render={() => (
          <FAQ />
        )}/>
        <Route path="/Schedule" render={() => (
          <Schedule />
        )}/>
        <Route path="/Sponsors" render={() => (
          <Sponsors />
        )}/>
      </div>
    );
  }
}

export default App;
