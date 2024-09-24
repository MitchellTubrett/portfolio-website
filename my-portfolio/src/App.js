import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { useState, useEffect } from 'react';
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
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
            <a href="about-section">Home</a> 
            <a href="about-section">About</a> 
            <a href="about-section">Timeline</a>
            <a href="about-section">CV</a>
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
            <div className="about-section">
              <h1>Hey there,</h1>
              <p>
                I'm Mitch. A computer enthusiast, avid fantasy book reader, enjoyer of video games, and guitar player who has an insatiable desire for continued learning. I finished up
                my education back in 2021 and have been in the tech field now for about 4 years (5 If you consider my co op experience, which I do). I've spent time in both development
                and analyst positions with a wide variety of expertise and exposure to different technologies. Below here you'll see a timeline of my professional career, my CV,
                completed and upcoming projects. If you want to chat about potential opportunities for work, inquire about my projects or just reach out to ask me some questions
                you can find me through my LinkedIn page, or through the contact me portion of this site.
              </p>
            </div>
            <p>Additional sections can go here.</p>
            {/* <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                  User Experience, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                  User Experience, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                  Strategy, Social Media
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                  Creative Direction, User Experience, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                  Creative Direction, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<StarIcon />}
              />
            </VerticalTimeline> */}
        </div>
          <footer className="footer">
            <p>© 2024 Mitchell Tubrett | All Rights Reserved</p>
          </footer>                   
    </div>         
  );
}

export default App;
