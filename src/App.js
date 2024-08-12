import React, { useState, useEffect } from 'react';
import './App.css';
import './darkmode.css'; // Import your dark mode CSS file
import Header from './components/Header/Header';
import Slider from './components/slider/slider';
import Projects from './components/Card1/projects';
import Skills from './components/Card/Skill';
import About from './components/About/About';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {



  return (
    <div className="App">
      <Header />
      <br />
      <Slider />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
/**
    "homepage": "https://S7eko.github.io/Protofilo",
    "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
 * 
 */
