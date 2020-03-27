import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Projects from "./components/projects.component.js";
import About from "./components/about.component.js";
import Contact from "./components/contact.component.js";
import Header from "./components/header.component.js"
import _404 from "./components/404.component.js"
import LandingPage from "./components/landingPage.component.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>

          <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/" component={LandingPage}/>
          <Route component={_404}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;