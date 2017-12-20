import React, { Component } from 'react';
import './Info.css';
import NavigationBar from './NavigationBar.js';
import Header from './Header.js';

class Info extends Component {
    render() {
        return(
            <div className="InfoBody">
                <Header />
                <NavigationBar />
                <h1>Welcome to the Info Page!</h1>
            </div>
        );
    }
}

export default Info;