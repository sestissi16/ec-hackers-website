import React, { Component } from 'react';
import './HomePage.css';
import NavigationBar from './NavigationBar.js'

class HomePage extends Component {
    render() {
        return(
            <div className="Body">
                <NavigationBar />
                <h1>Welcome Hackers!</h1>
            </div>
        );
    }
}

export default HomePage;