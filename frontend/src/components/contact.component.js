import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="text-center">
                <h1>Contact Jack</h1>
                <h6>Hello, the following form allows you to leave a message for Jack.</h6>
                <form style={{'max-width':'500px'}} 
                      className="form-group justify-content-center m-auto">
                    <label>Your Contact Email:</label>
                    <input className="form-control mb-2" 
                           type="email" 
                           placeholder="example@text.xyz"/>
                    <label>Subject:</label>
                    <input className="form-control mb-2" 
                           type="text" 
                           placeholder="Your message's subject line here"/>
                    <label>Message:</label>
                    <textarea className="form-control mb-2"
                              rows="3"
                              placeholder="Your message here..."></textarea>
                    <button type="submit" 
                            className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}