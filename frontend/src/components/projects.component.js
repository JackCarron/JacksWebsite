import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        return (
            <div className="text-center">
            <h3>Jack's Projects/Technical Experience</h3>
            <h5 className="mt-3">Salesforce Developer</h5>
            <li className="list-group-item">Salesforce Developer for Deloitte.</li>
            <ul className="list-group">
                <li className="list-group-item">
                    <a href="https://jcarron.net">
                             https://jcarron.net 
                    </a> , Front-End: React (S3, AWS), Backend: Salesforce</li>
            </ul>
            <a href="https://github.com/JackCarron/jack-sf-dev">
                    Personal Salesforce Github Repo
            </a><br/>
            <a href="https://github.com/JackCarron/jack-sf-dev">
                <img src="https://github.com/fluidicon.png"
                     style={{'maxWidth':'150px'}}/>
            </a> 
            <a className="ml-2" href="https://www.linkedin.com/in/hijackcarron/">
                <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                     style={{'minWidth':'150px'}}/>
            </a> 
            <h5 className="mt-3">Other Experience</h5>
            <ul className="list-group"><li className="list-group-item">Deloitte: Hands on experience in Software Development Lifecycle with Salesforce  
                at a leading tech company.</li>
                <li className="list-group-item">Salesforce Platform Developer 1 Certified</li>
                <li className="list-group-item mb-2">Deloitte: Building reusable salesforce assets with Salesforce Setup, Apex, and Lightning Web Component.</li>            
                <li className="list-group-item">PetSmart: .NET Software Engineer Intern REST API for Doggie DayCamp Endpoint: <br/>https://daycamp-api.petsmart.com/v1/pricing/[StoreNumber]</li>
                <li className="list-group-item mb-2">NAU Application Developer, Oracle SQL Database</li>                                
            </ul>
            <h5 className="mt-3">Bachelors of Science in Information Systems</h5>
            <img src="https://i.pinimg.com/originals/72/05/fd/7205fd42cb59499e0f729df4836cd70f.png"
                 alt="NAU"
                 style={{'maxWidth':'250px'}}/>    
            </div>
            

        )
    }
}