import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';
import NavigationBar from './NavigationBar.js';

class FAQ extends Component {
    render() {
        return(
            <div className="FAQPage">
                <NavigationBar />
                <div className="FAQContent">
                    <h1 className="FAQTitle">Welcome to the FAQ</h1>
                    <h2 className="FAQSub">Send us questions at <span><u>ecsquirrelhacks@gmail.com</u></span> and check back to see our answers!</h2>
                </div>
            </div>
        );
    }
}

export default FAQ;