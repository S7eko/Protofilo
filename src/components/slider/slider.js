import React, { useEffect } from 'react';
import './slider.css';
import Sheko1 from '../../components/assests/WhatsApp Image 2024-07-28 at 6.59.04 PM.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Typed from 'typed.js';
import resume from '../../components/assests/CV.pdf';

const Slider = () => {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Web developer", "FrontEnd (:", "React js"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="carousel slide my-5" data-bs-ride="carousel">
      <div className="carousel-inner container mt-5">
        <div className="carousel-item active">
          <div className="slider d-flex">
            <div className='slider-text'>
              <h1>Abdel-Rhman Mohamed</h1>
              <div className="multiple-text"></div>
              <div className='slider-icons'>
                <a href='https://m.facebook.com/profile.php?id=61555210807479' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="fa" />
                </a>
                <a href='https://twitter.com/Sh3ko11' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="fa" />
                </a>
                <a href='https://www.linkedin.com/in/abdelrhman-mohamed-8b021a1b4/' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="fa" />
                </a>
                <a href='https://github.com/S7eko' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="fa" />
                </a>
              </div>
              <a href={resume} download className='btn btn-primary'>Resume</a>
            </div>
            <div className='slider-img'>
              <img
                className='img-fluid'
                src={Sheko1}
                alt="Abdel-Rhman Mohamed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
