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
                            <th>What is Squirrel Hacks 2018?:</th>
                            <td>Squirrel Hacks 2018 is a hackathon that Earlham Hackers club is organizing for March 3rd and 4th. 
                                The hackathon will be hosted on the Earlham College campus. 
                                We hope to bring creative minds from colleges of the Richmond area and beyond.
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Info;