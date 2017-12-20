import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NavigationBar.css';

class NavigationBar extends Component {
    render() {
        return(
            <div className="menu">
                <div className= "link1"><Link to="/Home" className="Link1" >Home</Link></div>
                <div className="link2"><Link to="/SignUp" className="Link2">SignUp</Link></div>
                <div className="link3"><Link to="/Info" className="Link3">Info</Link></div>
            </div>
        );
    }
}

export default NavigationBar;