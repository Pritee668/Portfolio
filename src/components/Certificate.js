import React, { useState } from 'react';
import '../styles/Certificate.css'; 
import MyntraImage1 from "../image/certificates/Myntra1.jpg";
import MyntraImage2 from '../image/certificates/Myntra2.jpg';
import RunwayFlipkart from '../image/certificates/RunwayFlipkart.jpg';
import YoungTurks from '../image/certificates/YoungTurks.png';
import FlipkartCommerce from '../image/certificates/Flipkart&Commerce.jpg';
import CodingAssessment from '../image/certificates/CodingAssessment.jpg';
import CodingAmazon from '../image/certificates/CodingAmazon.jpg';

const certificatesData = [
  { title: 'Hacker Ramp Participation', description: 'Certificate for participating in Phase 1 organized by Myntra Designs Pvt. Ltd.', imageUrl: MyntraImage1 },
  { title: 'Unstop Talent Park-Tech', description: 'Certificate for completing the MCQ + Coding Assessment.', imageUrl: CodingAssessment },
  { title: 'Hacker Ramp Participation', description: 'Certificate for participating in Phase 2 organized by Myntra Designs Pvt. Ltd.', imageUrl: MyntraImage2 },
  { title: 'Naukri Campus Young Turks', description: "Certificate for participating in India's largest skill contest.", imageUrl: YoungTurks },
  { title: 'Flipkart Runway - Season 4', description: 'Certificate for participating in the Commerce/Business Online Quiz.', imageUrl: RunwayFlipkart },
  { title: 'HackOn with Amazon', description: 'Certificate for participation in HackOn Session 4.', imageUrl: CodingAmazon },
  { title: 'Flipkart Grid 6.0', description: 'Certificate for participating in the E-Commerce & Tech-Quiz.', imageUrl: FlipkartCommerce }
];

const Card = ({ title, description, imageUrl }) => (
  <li className="certificate-card">
    <h5>Certificates</h5>
    <img src={imageUrl} alt={title} className="certificate-image" />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
);

const Certificates = () => {
  const [carouselItems] = useState(certificatesData);
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % carouselItems.length; 
    setCurrentIndex(nextIndex);
  };


  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length; 
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="carouselwrapper">
      <div className="ui">
        <button 
          onClick={handlePrev} 
          className="prev"
        >
          <span className="material-icons">chevron_left</span>
        </button>
        <button 
          onClick={handleNext} 
          className="next"
        >
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
      <ul className="certificate-carousel">
        <Card key={carouselItems[currentIndex].title} {...carouselItems[currentIndex]} />
      </ul>
    </div>
  );
};

export default Certificates;
