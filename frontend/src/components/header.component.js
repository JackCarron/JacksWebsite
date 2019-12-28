import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../Logo.png";

class Header extends Component {
  render() {
    return (
<nav className="navbar navbar-expand-lg text-light bg-dark mr-auto mb-4 h5">
            <a class="navbar-brand" href="http://www.jcarron.net">
              <img src={logo} width="75" height="75" alt="Jack Carron" />
            </a>
            <Link to="/" className="navbar-brand">Jack Carron</Link>
            <div className="collpase navbar-collapse hover ">
              <ul className="navbar-nav">
                <li className="navbar-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/projects" className="nav-link">Projects</Link>
                </li>
                <li className="navbar-item">
                  <Link to='/contact' className="nav-link">Contact Me</Link>
                </li>
              </ul>
            </div>
          </nav>
      );
    }
  }
  
  export default Header;