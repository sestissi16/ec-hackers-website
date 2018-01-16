import React, { Component } from 'react';
import './Sponsors.css';
import NavigationBar from './NavigationBar.js';

class Sponsors extends Component {
    render() {
        return(
            <div className="SponsorsPage">
                <NavigationBar />
                <div className="SponsorsContent">
                    <p>Welcome to the Sponsors Page</p>
                </div>
            </div>
        );
    }
}

export default Sponsors;