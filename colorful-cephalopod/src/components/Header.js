import React, { Component } from 'react';
import '../assets/stylesheets/Header.css';

class Header extends Component {
  render() {
    return (
        <div className="Header">
          <h1 className="Header-title"><a href="#slide-main">Kikki Beltz | Software Developer</a></h1>
          <h1 className="Header-menu">
            <ul>
              <li><a href="#slide-about">About</a></li>
              <li><a href="#slide-experience">Experience</a></li>
              <li><a href="#slide-contact">Contact</a></li>
            </ul>
          </h1>
        </div>
    );
  }
}

export default Header;
