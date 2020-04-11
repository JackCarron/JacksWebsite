import React, { Component } from 'react';
const axios = require('axios');

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
          emailAddress: '',
          subject: '',
          body: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event){
        axios.post('api/messages/add', {
            emailAddress: this.state.emailAddress,
            subject: this.state.subject,
            body: this.state.body
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });          
        event.preventDefault();
        this.setState({
            emailAddress: '',
            subject: '',
            body: ''
        });
    }

    handleInputChange(event) {
        const target = event.target;

        this.setState({
          [target.name]: target.value
        });
      }

    render() {
        return (
            <div className="text-center">
                <h1>Contact Jack</h1>
                <h6>Hello, the following form allows you to leave a message for Jack.</h6>
                <form style={{'maxWidth':'500px'}} 
                      className="form-group justify-content-center m-auto"
                      onSubmit={this.handleSubmit}>
                    <label>Your Contact Email:</label>
                    <input className="form-control mb-2" 
                           type="email" 
                           name="emailAddress"
                           value={this.state.emailAddress}
                           onChange={this.handleInputChange}
                           placeholder="example@text.xyz"/>
                    <label>Subject:</label>
                    <input className="form-control mb-2" 
                           type="text"
                           name="subject"
                           value={this.state.subject} 
                           onChange={this.handleInputChange}
                           placeholder="Your message's subject line here"/>
                    <label>Message:</label>
                    <textarea className="form-control mb-2"
                              rows="3"
                              name="body"
                              value={this.state.body}
                              onChange={this.handleInputChange}
                              placeholder="Your message here..."></textarea>
                    <button type="submit" 
                            className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
