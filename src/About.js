import React, { Component } from 'react';
import './About.css';
import NavigationBar from './NavigationBar.js';

class Info extends Component {
    render() {
        return(
            <div className="InfoBody">
                <NavigationBar />
                <h1>Welcome to the Info Page!</h1>
            </div>
        );
    }
}

export default Info;