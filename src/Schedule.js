import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Schedule.css';
import NavigationBar from './NavigationBar.js';

class Schedule extends Component {
    render() {
        return(
            <div className="SchedulePage">
                <NavigationBar />
                <p>Welcome to the Schedule Page</p>
            </div>
        );
    }
}

export default Schedule;