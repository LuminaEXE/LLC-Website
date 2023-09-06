import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar">
            <a href="/" className="nav-item">
              Home
            </a>
            <a href="/Hobbies" className="nav-item">
              Hobbies
            </a>
            <a href="/Achievements" className="nav-item">
              Achievements
            </a>
            <a href="/Contact" className="nav-item">
              Contact
            </a>
            <a href="/Family" className="nav-item">
              Family
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

//nav by Ecem Gokdogan
