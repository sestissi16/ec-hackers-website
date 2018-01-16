import React, { Component } from 'react';
import './About.css';
import NavigationBar from './NavigationBar.js';

class Info extends Component {
    render() {
        return(
            <div className="InfoBody">
                <NavigationBar />
                <div className="AboutContent">
                    <h1>Welcome to the Info Page!</h1>
                </div>
            </div>
        );
    }
}

export default Info;