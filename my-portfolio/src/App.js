import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  const name = "Mitchell Tubrett";
  const linkedIn_link = "https://www.linkedin.com/in/mitchell-tubrett/";
  const github_link = "https://github.com/MitchellTubrett";

  return (
    <div className="App">   
      <div className="background-content">
        <div className='portfolio-bar'>
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
      <div className="page-content">
            <h1>Welcome to My Portfolio</h1>
            <p>This is where new content can be added below the background.</p>
            <p>Additional sections can go here.</p>
        </div>     
    </div>      
  );
}

export default App;
