import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';
import NavigationBar from './NavigationBar.js';

class FAQ extends Component {
    render() {
        return(
            <div className="FAQPage">
                <NavigationBar />
                <p>Welcome to the FAQ</p>
            </div>
        );
    }
}

export default FAQ;