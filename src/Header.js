import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <div className="Header">
                <img src="http://moziru.com/images/squirrel-clipart-20.png" alt="hackathon logo" className="LogoImg" />
                <h1 className="App-title">Squirrel Hack</h1>
                <img src='http://www.performanceservices.com/files/image/earlham-college-logo.png' alt="Earlham College logo" className="ECLogo" />
            </div>
        );
    }
}

export default Header;