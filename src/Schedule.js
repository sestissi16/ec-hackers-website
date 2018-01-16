import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Schedule.css';
import NavigationBar from './NavigationBar.js';

class Schedule extends Component {
    render() {
        return(
            <div className="SchedulePage">
                <NavigationBar />
                <div className="ScheduleContent">
                    <p>Welcome to the Schedule Page</p>
                </div>
            </div>
        );
    }
}

export default Schedule;