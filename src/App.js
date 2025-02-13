import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { useState, useEffect } from 'react';
import profileImage from './assets/images/headshot.jpg'; // Import your image

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


  return (
    <div className="App">   
      <div className="background-content">
        <div className={`portfolio-bar ${isScrolled ? 'scrolled' : ''}`}>
        <p>
            {name} 
        </p> 
          <div className="social-icons">
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
            <h1>About Me</h1>
            <p>This is where new content can be added below the background.</p>
            <p>Additional sections can go here.</p>
        </div>
          <footer className="footer">
            <p>© 2024 Mitchell Tubrett | All Rights Reserved</p>
          </footer>                   
    </div>         
  );
}

export default App;
