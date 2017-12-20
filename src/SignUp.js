import React, { Component } from 'react';
import './SignUp.css';
import Header from './Header.js';
import NavigationBar from './NavigationBar.js';

class SignUp extends Component {
    render() {
        return(
            <div className="SignUpBody">
                <Header/>
                <NavigationBar />
                <h1>Welcome to SignUp Page!</h1>
            </div>
        );
    }
}

export default SignUp;