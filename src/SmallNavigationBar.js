import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SmallNavigationBar.css';
import SquirrelHackIcon from './finished-squirrel-hack-logo-transparent.png';

class SmallNavigationBar extends Component{
    render() {
        return(
            <div className="smallMenu">
                <img src={SquirrelHackIcon} alt="hackathon logo" className="SmallNavLogoImg" />
                <p className="SmallAppTitle">Squirrel Hacks</p>
                <div className= "smalllink1"><Link to="/" className="SmallLink1" >Home</Link></div>
                <div className="smalllink2"><Link to="/SignUp" className="SmallLink2">SignUp</Link></div>
                <div className="smalllink3"><Link to="/About" className="SmallLink3">About</Link></div>
                <div className="smalllink4"><Link to="/FAQ" className="SmallLink4"> FAQ </Link></div>
                <div className="smalllink5"><Link to="/Schedule" className="SmallLink5"> Schedule </Link></div>
                <div className="smalllink6"><Link to="/Sponsors" className="SmallLink6"> Sponsors </Link></div>
                <img src='http://www.performanceservices.com/files/image/earlham-college-logo.png' alt="Earlham College logo" className="SmallNavECLogo" />
            </div>
        );
    }
}

export default SmallNavigationBar;