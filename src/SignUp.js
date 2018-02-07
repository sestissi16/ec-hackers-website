import React, { Component } from 'react';
import './SignUp.css';
import NavigationBar from './NavigationBar.js';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class SignUp extends Component {
    render() {
        const html = '<div class="typeform-widget" data-url="https://saris7.typeform.com/to/G1GYux" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=G1GYux&utm_source=typeform.com-11518443-Basic&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>'
        return(
            <div className="SignUpBody">
                <NavigationBar />
                <div className="SignUpContent">
                    {/* <div> { ReactHtmlParser(html) } </div> */}
                    <h1 className="SignUpTitle">So you want to join in on the fun?</h1>
                    <h2 className="SignUpInstruction">Follow the link below to sign up and be a spart of Squirrel Hacks!</h2>
                    <div className="SignUpButton"><a href="https://saris7.typeform.com/to/G1GYux" className="SignUpLink">Sign Up Here!</a></div>
                </div>
            </div>
        );
    }
}

export default SignUp;