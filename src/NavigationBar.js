import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import SquirrelHackIcon from './finished-squirrel-hack-logo-transparent.png'

class NavigationBar extends Component {
    render() {
        return(
            <div className="menu">
                <img src={SquirrelHackIcon} alt="hackathon logo" className="NavLogoImg" />
                <p className="AppTitle">Squirrel Hack</p>
                <div className= "link1"><Link to="/" className="Link1" >Home</Link></div>
                <div className="link2"><Link to="/SignUp" className="Link2">SignUp</Link></div>
                <div className="link3"><Link to="/About" className="Link3">About</Link></div>
                <div className="link4"><Link to="/FAQ" className="Link4"> FAQ </Link></div>
                <div className="link5"><Link to="/Schedule" className="Link5"> Schedule </Link></div>
                <div className="link6"><Link to="/Sponsors" className="Link6"> Sponsors </Link></div>
                <img src='http://www.performanceservices.com/files/image/earlham-college-logo.png' alt="Earlham College logo" className="NavECLogo" />
            </div>
        );
    }
}

export default NavigationBar;