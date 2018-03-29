import React, { Component } from 'react';
import Main from './Main';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import '../assets/stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-main"><Main /></div>
        <div className="App-section" id="About"><About /></div>
        <div className="App-section" id="Experience"><Experience /></div>
        <div className="App-section" id="Contact"><Contact /></div>
        <div className="App-footer"><Footer /></div>
      </div>
    );
  }
}

export default App;
