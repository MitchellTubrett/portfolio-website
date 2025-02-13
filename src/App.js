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
              <div id="about-section" className="about-section">
                <h1>Hey there,</h1>
                <p>

                  I'm Mitch. A computer enthusiast, avid fantasy book reader, enjoyer of video games, and guitar player who has an insatiable desire for continued learning. I finished up
                  my education back in 2021 and have been in the tech field now for about 4 years (5 If you consider my co op experience, which I do). I've spent time in both development
                  and analyst positions with a wide variety of expertise and exposure to different technologies. Below here you'll see a timeline of my professional career, my CV,
                  completed and upcoming projects. If you want to chat about potential opportunities for work, inquire about my projects or just reach out to ask me some questions
                  you can find me through my LinkedIn page, or through the contact me portion of this site.
                </p>
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
