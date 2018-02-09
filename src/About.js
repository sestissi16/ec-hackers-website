import React, { Component } from 'react';
import './About.css';

class Info extends Component {
    render() {
        return(
            <div className="InfoBody">
                <div className="AboutContent">
                    <h1 className="AboutTitle">Info about our Hackathon</h1>
                    <table>
                        <tr>
                            <th>What is a Hackathon?:</th>
                            <td>“A hackathon is best described as an “invention marathon”. 
                                Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. 
                                You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.”
                                 - Major League Hacking</td>
                        </tr>
                        <tr>
                            <th>What is Squirrel Hacks 2018?:</th>
                            <td>Squirrel Hacks 2018 is a hackathon that Earlham Hackers club is organizing for March 3rd and 4th. 
                                The hackathon will be hosted on the Earlham College campus. 
                                We hope to bring creative minds from colleges of the Richmond area and beyond.
                            </td>
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

export default Info;