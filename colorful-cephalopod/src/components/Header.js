import React, { Component } from 'react';
import '../assets/stylesheets/Header.css';

class Header extends Component {
  render() {
    return (
        <header className="Header">
          <h1 className="Header-title">Kikki Beltz | Software Developer</h1>
          <h1 className="Header-menu">
            <ul>
              <li>About</li>
              <li>Experience</li>
              <li>Contact</li>
            </ul>
          </h1>
        </header>
    );
  }
}

export default Header;
