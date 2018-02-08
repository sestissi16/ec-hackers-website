import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Schedule.css';

class Schedule extends Component {
    render() {
        return(
            <div className="SchedulePage">
                <div className="ScheduleContent">
                    <h1 className="ScheduleTitle">Welcome to the Schedule Page</h1>
                    <h2 className="ScheduleSub">Come back soon for the official schedule</h2>
                </div>
            </div>
        );
    }
}

export default Schedule;