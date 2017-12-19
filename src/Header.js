import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <div className="Header">
                <img src="https://i.pinimg.com/736x/94/12/71/941271983924b44fab72c3fd9b01076b--acorn-necklace-necklace-charm.jpg" alt="hackathon logo" className="LogoImg" />
                <h1 className="App-title">Squirrel Hack</h1>
            </div>
        );
    }
}

export default Header;