import React, { Component } from 'react';
import '../assets/stylesheets/Header.css';

class Header extends Component {
  render() {
    return (
        <header className="Header">
          <h1 className="Header-title">Kikki Beltz | Software Developer</h1>
          <h1 className="Header-menu">
            <ul>
              <li><a href="#About">About</a></li>
              <li><a href="#Experience">Experience</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
          </h1>
        </header>
    );
  }
}

export default Header;
