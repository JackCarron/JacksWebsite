import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        return (
            <div className="text-center">
            <h3>Jack's Projects/Technical Experience</h3>
            <h5 className="mt-3">Full-Stack Developer</h5>
            <ul className="list-group">
                <li className="list-group-item">Front-End: React, Back-End: Express JS, Runtime: Node.js, Database: Mongo DB</li>
                <li className="list-group-item">Full-Stack software developer for internal Deloitte project.</li>
                <li className="list-group-item">
                    <a href="https://jcarron.net">
                             https://jcarron.net 
                    </a> built from scratch with MERN by Jack</li>
            </ul>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                 alt="react"
                 style={{'maxWidth':'250px'}}/>
            <h5 className="mt-3">Other Experience</h5>
            <ul className="list-group"><li className="list-group-item">Deloitte: Hands on experience in Software Development Lifecycle with Salesforce  
                at a leading tech company.</li>
                <li className="list-group-item">He recently passed the Salesforce Platform Developer 1 exam.</li>
                <li className="list-group-item mb-2">Deloitte: Building reusable salesforce assets with Salesforce Setup, Apex, and Lightning Web Component.</li>            
                <li className="list-group-item">PetSmart: .NET Software Engineer Intern 
                    <a href="https://daycamp-api.petsmart.com/swagger"> REST API for Doggie DayCamp</a></li>
                <li className="list-group-item mb-2">OnBase Developer, Oracle SQL Database</li>                                
            </ul>
            <h5 className="mt-3">Bachelors of Science in Information Systems</h5>
            <img src="https://i.pinimg.com/originals/72/05/fd/7205fd42cb59499e0f729df4836cd70f.png"
                 alt="NAU"
                 style={{'maxWidth':'250px'}}/>    
            </div>
            

        )
    }
}