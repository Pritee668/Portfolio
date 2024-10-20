import React from "react";
import "../styles/Home.css"; 
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-container" id="home">
      <div className="home-content">
        <h3> Hi, I'm Pritee Gupta</h3>
       <p>
       Hi, I’m Pritee Gupta, a dedicated Web Developer skilled in both front-end and back-end development, specializing in the MERN stack. I’m passionate about creating dynamic websites and applications that offer seamless user experiences. Take a look at my work and skill
       </p>
       <Link to="/projects"  className="btn primary-btn">Explore Projects</Link>
        <a href="https://pritee-gupta-portfolio.netlify.app/projects" className="btn primary-btn">
          
        </a>
      </div>
    </section>
  );
};

export default Home;
