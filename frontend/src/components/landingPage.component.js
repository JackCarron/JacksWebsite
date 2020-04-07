import React, { Component } from 'react';

import golf from "../assets/Golf.PNG"
import professional from "../assets/Professional.PNG"

export default class About extends Component {
    render() {
        return (
            <div className="text-center">
                <h3>Welcome to jcarron.net</h3>
                <h5>Jack Carron's portfolio</h5>             
            <img src={professional}
                 alt="Professional Headshot"
                 style={{'maxWidth':'350px'}}/>   
            <br />
            <img className="mt-3" 
                 src={golf}
                 alt="Golf"
                 style={{'maxWidth':'350px'}}/>    
            </div>
        )
    }
}