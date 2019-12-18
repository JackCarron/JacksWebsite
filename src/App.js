import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Projects from "./components/projects.component.js";
import About from "./components/about.component.js";
import Contact from "./components/contact.component.js";
import Header from "./components/header.component.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header/>
          <Route path="/about" exact component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;