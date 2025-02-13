import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { useState, useEffect } from 'react';
import profileImage from './assets/images/headshot.jpg'; // Import your image
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Timeline from './Timeline';
import Flipbook from "./Flipbook";



function App() {
  const name = "Mitchell Tubrett";
  const linkedIn_link = "https://www.linkedin.com/in/mitchell-tubrett/";
  const github_link = "https://github.com/MitchellTubrett";
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true); // Set to true when scrolled down
      } else {
        setIsScrolled(false); // Set to false when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
  };


  return (
    <div className="App">
      <main>   
        <div className="background-content">
          <div className={`portfolio-bar ${isScrolled ? 'scrolled' : ''}`}>
          <p>
              {name} 
          </p>
          
            <div className="social-icons">
              <a href="about-section">Home</a> 
              <a onClick={() => scrollToSection('about-section')}>About</a>  
              <a onClick={() => scrollToSection('career-timeline')}>Timeline</a>
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
              <a href="about-section">Contact</a>            
              <a href={linkedIn_link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={github_link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>   
            </div>                      
          </div>
        </div>
        <div className="profile-image-container">
          {/* <img src={profileImage} alt="Mitchell Tubrett" className="profile-image" /> */}
          <div className="profile-image-name">
              <a>Mitchell Tubrett</a>
            </div> 
            <div className="profile-image-text">
              <a>Developer, Analyst</a>
            </div> 
            <div className="social-icons-two">
              <a href={linkedIn_link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={github_link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>          
            </div>
          
        </div>  
        <div className="page-content">
          <div className="flipbook-wrapper">
            <Flipbook />
           </div>
              <section id="career-timeline">
                <h2>My Career Timeline</h2>
                <div className='timeline-wrapper'>
                <Timeline />
                </div>
              </section>  
              <footer className="footer">
              <p>© 2024 Mitchell Tubrett | All Rights Reserved</p>
          </footer>     
          </div>        
          </main>
    </div>         
  );
}

export default App;
