import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Flipbook.css"; // Ensure this file exists

const Flipbook = () => {
  const [refresh, setRefresh] = useState(0); // State to force re-render

  return (
    <div className="flipbook-container">
      <HTMLFlipBook 
        width={400}
        height={500}
        showCover={true}  /* Ensures book starts closed */
        flippingTime={800} /* Smooth flip transition */
        forceRender={true}
        startPage={0}  /* Ensures first page is visible */
        maxShadowOpacity={0.5} /* Adds realistic flipping shadows */
        style={{ zIndex: 50, position: "relative" }} // Force re-render after flip
      >
        <div className="page cover">
          <h2>📖 My Story</h2>
          <p>Flip through to learn more about me!</p>
        </div>
        <div className="page">
          <h2>👋 About Me</h2>
          <p>I'm Mitch, a passionate developer with a love for learning.</p>
        </div>
        <div className="page">
          <h2>💻 My Skills</h2>
          <ul>
            <li>React & JavaScript</li>
            <li>Python & Automation</li>
            <li>Cloud Infrastructure</li>
          </ul>
        </div>
        <div className="page">
          <h2>🎮 Hobbies</h2>
          <p>I enjoy gaming, reading fantasy books, and playing guitar.</p>
        </div>
        <div className="page">
          <h2>📞 Contact Me</h2>
          <p>
            Connect with me on <a href="https://linkedin.com/in/mitchell-tubrett" target="_blank" rel="noopener noreferrer">LinkedIn</a>!
          </p>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Flipbook;
