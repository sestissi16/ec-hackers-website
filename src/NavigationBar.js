import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import './NavigationBar.css';
import SquirrelHackIcon from './finished-squirrel-hack-logo-transparent.png'
import Media from 'react-media';
import SmallNavigationBar from './SmallNavigationBar.js';


class NavigationBar extends Component {
    render() {
        return(
            <div>
                {/* <Media query={{maxWidth:1024}}>
                    {
                        matches => matches ? (
                            <SmallNavigationBar />
                        ) : (
                            <div className="menu">
                                <img src={SquirrelHackIcon} alt="hackathon logo" className="NavLogoImg" />
                                <p className="AppTitle">Squirrel Hacks</p>
                                <div className= "link1"><Scrollchor to="HomePage" className="Link1" >Home</Scrollchor></div>
                                <div className="link2"><Scrollchor to="SignUp" className="Link2">SignUp</Scrollchor></div>
                                <div className="link3"><Scrollchor to="About" className="Link3">About</Scrollchor></div>
                                <div className="link4"><Scrollchor to="FAQ" className="Link4"> FAQ </Scrollchor></div>
                                <div className="link5"><Scrollchor to="Schedule" className="Link5"> Schedule </Scrollchor></div>
                                <div className="link6"><Scrollchor to="Sponsors" className="Link6"> Sponsors </Scrollchor></div>
                                <img src='http://www.performanceservices.com/files/image/earlham-college-logo.png' alt="Earlham College logo" className="NavECLogo" />
                            </div>
                        )
                    }
                </Media> */}
                <div className="menu">
                    <img src={SquirrelHackIcon} alt="hackathon logo" className="NavLogoImg" />
                    <p className="AppTitle">Squirrel Hacks</p>
                    <div className= "link1"><Scrollchor to="HomePage" className="Link1" >Home</Scrollchor></div>
                    <div className="link2"><Scrollchor to="SignUp" className="Link2">SignUp</Scrollchor></div>
                    <div className="link3"><Scrollchor to="About" className="Link3">About</Scrollchor></div>
                    <div className="link4"><Scrollchor to="FAQ" className="Link4"> FAQ </Scrollchor></div>
                    <div className="link5"><Scrollchor to="Schedule" className="Link5"> Schedule </Scrollchor></div>
                    <div className="link6"><Scrollchor to="Sponsors" className="Link6"> Sponsors </Scrollchor></div>
                    <img src='http://www.performanceservices.com/files/image/earlham-college-logo.png' alt="Earlham College logo" className="NavECLogo" />
                </div>
                
            </div>
        );
    }
}

export default NavigationBar;