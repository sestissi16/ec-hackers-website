import React, { Component } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom'
import Scrollchor from 'react-scrollchor';

import './App.css';
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
        <div id="HomePage">
          <HomePage />
        </div>
        <div id="SignUp">
          <SignUp />
        </div>
        <div id="About">
          <About />
        </div>
        <div id="FAQ">
          <FAQ />
        </div>
        <div id="Schedule">
          <Schedule />
        </div>
        <div id="Sponsors">
          <Sponsors />
        </div>
      </div>
    );
  }
}

export default App;
