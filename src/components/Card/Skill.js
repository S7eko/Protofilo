import React, { useEffect } from 'react'; // استيراد useEffect
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';
import './Skill.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // تهيئة AOS مع مدة الحركة 1000 مللي ثانية
  }, []);

  const skills = [
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "Git", icon: faGithub },
    { name: "Github", icon: faGithub },
    { name: "npm", icon: faNpm }
  ];

  return (
    <div className="container skill-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill" data-aos="flip-left"> {/* إضافة data-aos */}
          <div className="circle-wrap">
            <div className="circle">
              <FontAwesomeIcon className="skill-icon" icon={skill.icon} size="4x" />
              <h4>{skill.name}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
