import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // التحقق من الوضع المظلم عند التحميل الأول
    if (document.body.classList.contains('dark-mode')) {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className={`header ${isDarkMode ? 'dark' : ''}`}>
      <nav className={`navbar bg-body-tertiary fixed-top ${isDarkMode ? 'navbar-dark bg-dark' : ''}`} data-bs-theme={isDarkMode ? 'dark' : 'light'}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Abdel-Rhman Mohamed</a>
          <button onClick={handleToggleDarkMode} className="btn btn-dark-mode-toggle">
            <i id="darkBtn" className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
