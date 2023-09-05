import React, { Component } from "react";
import "./index.css";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar">
            <a href="#" className="nav-item">
              Home
            </a>
            <a href="#" className="nav-item">
              Hobbies
            </a>
            <a href="#" className="nav-item">
              Achivements
            </a>
            <a href="#" className="nav-item">
              Contact
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

//nav by Ecem Gokdogan
