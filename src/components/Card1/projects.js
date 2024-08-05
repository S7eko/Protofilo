import React, { useEffect } from 'react';
import Sheko1 from '../../components/assests/ecomerse.jpeg';
import Sheko2 from '../../components/assests/Sushi.jpeg';
import Sheko3 from '../../components/assests/calcloter.jpeg';


import './projects.css';
import redStor from '../../components/assests/red stor.avif';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // تهيئة AOS مع مدة الحركة 1000 مللي ثانية
  }, []);

  const cardData = [
    {
      img: Sheko2,
      title: "Food-Fish",
      text: "First-commit",
      link: "https://food-fish-nine.vercel.app/"
    },
    {
      img: Sheko3,
      title: "Calculator",
      text: "First-commit",
      link: "https://calculator-phi-six-10.vercel.app/"
    },
    {
      img:Sheko1,
      title: "Ecoemmerc",
      text: "Ecoemmerc-Shop",
      link: "https://s7eko.github.io/Ecoemmerc/"
    },
    {
      img: redStor,
      title: "Red-Stor",
      text: "Red-Stor-ecommerce",
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
