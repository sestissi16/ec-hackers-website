import React, { Component } from 'react';
import './HomePage.css';
import NavigationBar from './NavigationBar.js';
import SquirrelLogo from './finished-squirrel-hack-logo-transparent.png'

class HomePage extends Component {
    render() {
        return(
            <div className="Body">
                <NavigationBar />
                <div className="Content row">
                    <img className="LogoPic column small-1 medium-3" src={SquirrelLogo} alt="Squirrel Hack Logo" />
                    <div className="WordContent">
                        <h1 claasName="column small-2 medium-4" id="WelcomeTitle">Welcome to Squirrel Hacks!</h1>
                        <h2 className="WelcomeSub">Earlham College's inaugural Hackathon</h2>
                        <h3 className="TagLine">We're excited to offer a socially responsible <em>24 hours</em> of exciting healthy hacking!</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;