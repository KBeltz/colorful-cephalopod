import React from "react";
import Main from './Main';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import { Carousel } from 'react-responsive-carousel';
import '../assets/stylesheets/Carousel.css';

export default () => (
  <Carousel infiniteLoop useKeyboardArrows showStatus={false} showArrows={false} axis='vertical'>
    <div id="slide-main">
      <Main />
    </div>
    <div id="slide-about">
      <About />
    </div>
    <div id="slide-experience">
      <Experience />
    </div>
    <div id="slide-contact">
      <Contact />
    </div>
    
  </Carousel>
);
 