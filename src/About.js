import React, { Component } from 'react';
import './About.css';
import NavigationBar from './NavigationBar.js';

class Info extends Component {
    render() {
        return(
            <div className="InfoBody">
                <NavigationBar />
                <div className="AboutContent">
                    <h1 className="AboutTitle">Welcome to the Info Page!</h1>
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
                            <td>Squirrel Hacks 2018 is hackathon that Earlham Hackers club is organizing for March 2018. 
                                This hackathon will be hosted on the Earlham College campus and hopes to bring creative minds from colleges 
                                from the Richmond area and beyond.
                            </td>
                        </tr>
                        <tr>
                            <th>What's different about our hackathon?</th>
                            <td>Squirrel Hacks is a hackathon with and Earlham spin on it, meaning:
                                <ul>
                                    <li>It is highly collaborative, bringing people from different areas of expertise together to solve a problem of common interest.</li>
                                    <li>It will provide a relaxed and welcoming environment by providing stress relieving activities and no-tech sleeping areas.</li>
                                    <li>It is multi-themed, with some being Social Justice, Global/Public Health, Innovation, etc.</li>
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