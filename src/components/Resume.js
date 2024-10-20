import React from 'react';
import resumeImage from '../image/FinalResume.jpg'; 
import '../styles/Resume.css';

const ResumeDisplay = () => {
  return (
    <section id="resume-display" className="resume-display-section">
      <h2>Resume</h2>
      <img src={resumeImage} alt="Resume" className="resume-image" />
      <div className="resume-buttons">
        <a 
          href={resumeImage} 
          download="My_Resume.png" 
          className="download-button"
        >
          Download Resume
        </a>
        <a 
          href={resumeImage} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="view-button"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default ResumeDisplay;
