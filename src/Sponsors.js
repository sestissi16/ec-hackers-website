import React, { Component } from 'react';
import './Sponsors.css';
import NavigationBar from './NavigationBar.js';

class Sponsors extends Component {
    render() {
        return(
            <div className="SponsorsPage">
                <NavigationBar />
                <div className="SponsorsContent">
                    <h1  className="SponsorsTitle">Welcome to the Sponsors Page</h1>
                    <h2 className="SponsorsSub">How can you make it happen or get involved?</h2>
                    <h3 className="SponsorsListTitle">You can support the event in the following forms:</h3>
                    <ul className="BigList">
                        <li>Sponsorships for</li>
                        <ul className="SmallList">
                            <li>Meals,</li>
                            <li>Prizes,</li>
                            <li>Logistics,</li>
                            <li>Tech for use during the hackathon.</li>
                        </ul>
                        <li>Attending and helping with, the event by:</li>
                        <ul className="SmallList">
                            <li>Judging the competition,</li>
                            <li>Mentorship</li>
                            <li>Voluntary services</li>
                        </ul>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sponsors;