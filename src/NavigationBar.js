import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NavigationBar.css';

class NavigationBar extends Component {
    render() {
        return(
            <div className="menu">
                <div className= "link1"><Link to="/Home" >Home</Link></div>
                <div className="link2"><Link to="/SignUp">SignUp</Link></div>
                <div className="link3"><Link to="/Info">Info</Link></div>
            </div>
        );
    }
}

export default NavigationBar;