import React, { useEffect } from 'react';
import Sheko1 from '../../components/assests/WhatsApp Image 2024-07-28 at 6.59.04 PM.jpeg';
import './projects.css';
import redStor from '../../components/assests/Sum-photo-1089168.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // تهيئة AOS مع مدة الحركة 1000 مللي ثانية
  }, []);

  const cardData = [
    {
      img: Sheko1,
      title: "Abdel-Rhman Mohamed",
      text: "Frontend Developer",
      link: "https://s7eko.github.io/Food/"
    },
    {
      img: Sheko1,
      title: "Abdel-Rhman Mohamed",
      text: "Frontend Developer",
      link: "https://s7eko.github.io/Food/"
    },
    {
      img: Sheko1,
      title: "Abdel-Rhman Mohamed",
      text: "Frontend Developer",
      link: "https://s7eko.github.io/Food/"
    },
    {
      img: redStor,
      title: "Abdel-Rhman Mohamed",
      text: "Frontend Developer",
      link: "https://s7eko.github.io/Red-Stor-design/"
    },
    {
      img: redStor,
      title: "Abdel-Rhman Mohamed",
      text: "Frontend Developer",
      link: "https://s7eko.github.io/Red-Stor-design/"
    }
    // Add more card data here if needed
  ];

  return (
    <div className="container">
      <div className='row'>
        <h1 className="card-title">Projects</h1>

        {cardData.map((card, index) => (
          <div key={index} className='col-lg-3 col-md-4 col-sm-6 mb-4 Card' data-aos="fade-up">
            <a href={card.link} target="_blank" rel="noopener noreferrer" className='card-link'>
              <div className="Sheko">
                <img
                  src={card.img}
                  alt={card.title}
                />
                <div className="card-body">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
