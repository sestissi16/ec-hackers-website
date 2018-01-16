import React, { Component } from 'react';
import './HomePage.css';
import NavigationBar from './NavigationBar.js';
import Header from './Header.js';

class HomePage extends Component {
    render() {
        return(
            <div className="Body">
                {/* <Header /> */}
                <NavigationBar />
                <div className="Content row">
                    <h1 claasName="column small-2 medium-4">Welcome Hackers!</h1>
                    <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F37204292%2F160311289377%2F1%2Foriginal.jpg?w=1000&rect=52%2C0%2C1610%2C805&s=334ecf41e9082d9798bb143e603aa123" alt="hackathon pic" className="HackathonPic column small-2 medium 4"/>
                    <img src="http://www.athens.edu/images/coas/programs/computer-science.jpg?x75869" alt="computer science pic" className="RandoPic column small-2 medium-4"/>
                </div>
            </div>
        );
    }
}

export default HomePage;