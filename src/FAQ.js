import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

class FAQ extends Component {
    render() {
        return(
            <div className="FAQPage">
                <div className="FAQContent">
                    <h1 className="FAQTitle">Welcome to the FAQ</h1>
                    <h2 className="FAQSub">Send us questions at <span><u>ecsquirrelhacks@gmail.com</u></span> and check back to see our answers!</h2>
                    <table>
                        <tr>
                            <th>What is a Hackathon?:</th>
                            <td>“A hackathon is best described as an “invention marathon”. 
                                Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. 
                                You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.”
                                 - Major League Hacking</td>
                        </tr>
                        <tr>
                            <th>What's different about our hackathon?:</th>
                            <td>Squirrel Hacks is a hackathon with and Earlham spin on it, meaning:
                                <ul>
                                    <li>It is highly collaborative, bringing people from different areas of expertise together to solve a problem of common interest.</li>
                                    <li>We will provide a relaxed and welcoming environment by offering stress-relieving activities and no-tech sleeping areas.</li>
                                    <li>It is multi-themed, with some being social justice, global/public health, innovation, and more!</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default FAQ;