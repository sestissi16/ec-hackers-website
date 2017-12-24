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
                <p> This is where you'll sign up for the Hackathon.</p>
                <div className="NoteForm">
                    <p>
                        <input
                            
                        />
                    </p>
                </div>
            </div>
        );
    }
}

export default SignUp;