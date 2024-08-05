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
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check and apply dark mode from localStorage
    const savedDarkMode = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark-mode', newMode);
      localStorage.setItem('isDarkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

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
