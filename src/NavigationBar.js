import React, { Component } from 'react';
import './NavigationBar.css';

class NavigationBar extends Component {
    render() {
        return(
            <div className="menu">
                <div className= "link1"><a>Home</a></div>
                <div className="link2"><a>SignUp</a></div>
                <div className="link3"><a>Info</a></div>
            </div>
        );
    }
}

export default NavigationBar;