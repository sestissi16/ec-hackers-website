import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Schedule.css';

class Schedule extends Component {
    render() {
        return(
            <div className="SchedulePage">
                <div className="ScheduleContent">
                    <h1 className="ScheduleTitle">Welcome to the Schedule Page</h1>
                    <ul> <span>Saturday - March 3rd, 2018</span>
                        <li>9:00 AM - 10:00 AM: Check-in and breakfast</li>
                        <li>10:00 AM - 10:30 AM: Opening ceremony</li>
                        <li>10:30 AM - 11:00 AM: Team forming</li>
                        <li><em>11:00 AM: Hacking begins</em></li>
                        <li>12:00 PM: Lunch</li>
                        <li>1:00 PM - 4:00 PM: Tech Talks</li>
                        <li>6:00 PM - 8:00 PM: Dinner</li>
                        <li>10:00 PM: Root-beer and Ping Pong</li>
                        <li>10:00 PM - 11:00 PM: Long Nap begins</li>
                        <li>11:00 PM: Coffee bar</li>
                        <li>11:00 PM - 12:00 AM: Cup-stacking</li>
                        <li>12:00 AM - 4:00 AM: Midnight snacks</li>
                    </ul>
                    <ul> <span>Sunday - March 4th, 2018</span>
                        <li>7:00 AM - 8:00 AM: Yoga session</li>
                        <li>8:00 AM - 9:00 AM: Breakfast</li>
                        <li><em>11:00 AM: Hacking ends</em></li>
                        <li>11:00 AM - 12:00 PM: Lunch</li>
                        <li>12:00 PM - 2:00 PM: Presentation and Judging</li>
                        <li>2:00 PM - 3:00 PM: Awards and Closing Ceremony</li>
                        <li>3:00 PM: You're free to go!</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Schedule;