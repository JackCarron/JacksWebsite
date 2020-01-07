import React, { Component } from 'react';

import rory from "../assets/rory-the-tiger-1.png"
import skate from "../assets/Jack Skate N.Quezada-8955.JPG"

export default class About extends Component {
    render() {
        return (
            <div className="text-center">
                <h3>About Jack</h3>
                <ul className="list-group">
                    <li className="list-group-item">Originally from Pasadena, CA. Now residing in Scottsdale, AZ</li>
                    <li className="list-group-item mb-3">Fosters a passion for software engineering, golf, extreme sports, animals, and helping others</li>                    
            </ul>
            <img src={rory}
                         style={{'max-width':'350px'}}/>
            <br />
            <img className="mt-3" src={skate}
                         style={{'max-width':'500px'}}/>             
            </div>
        )
    }
}