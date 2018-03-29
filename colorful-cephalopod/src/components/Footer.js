import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer className="Footer">
          <ul className="Footer-menu">
            <li className="Footer-twitter"><a href="https://twitter.com/KikkiBeltz"><i className="fab fa-twitter"></i></a></li>
            <li className="Footer-linkedin"><a href="https://www.linkedin.com/in/kbeltz/"><i className="fab fa-linkedin-in"></i></a></li>
            <li className="Footer-github"><a href="https://github.com/kbeltz"><i className="fab fa-github"></i></a></li>
            <li className="Footer-email"><a href="mailto:beltz08@me.com?Subject=You%20Are%20Rad"><i className="fas fa-envelope"></i></a></li>
          </ul>
        </footer>
    );
  }
}

export default Footer;
