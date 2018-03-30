import React, { Component } from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Footer from './Footer';
import '../assets/stylesheets/App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header"><Header /></div>
        <div className="Carousel"><Carousel /></div>
        <div className="App-footer"><Footer /></div>
      </div>
    );
  }
}

export default App;
