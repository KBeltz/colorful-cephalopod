import React, { Component } from 'react';
import Header from './Header';
import '../assets/stylesheets/Main.css';

class Main extends Component {
  render() {
    return (
        <div className="Main">
          <Header />
          <h1 className="Main-content"></h1>
        </div>
    );
  }
}

export default Main;
