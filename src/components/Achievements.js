
import React from 'react';
import '../styles/Achievements.css';
import Certificates from './Certificate';

const achievementsData = [
  {
    title: 'Certificate of Participation - Hacker Ramp',
    description: 'Participated in Phase 1 & Phase 2 of Hacker-Ramp organized by Myntra Designs Pvt. Ltd.',
    icon: '🎓'
  },
  {
    title: 'Unstop Talent Park-Tech Assessment',
    description: 'Completed MCQ + Coding Assessment at Unstop Talent Park-Tech.',
    icon: '📝'
  },
  { 
    title: 'Hacker Ramp Participation', 
    description: 'Certificate for participating in Phase 2 organized by Myntra Designs Pvt. Ltd.',
    icon:'🎓'
},
  { 
    title: 'Naukri Campus Young Turks', 
    description: "Certificate for participating in India's largest skill contest.",
    icon:'🏆'
 },
  {
    title: 'Commerce/Business Online Quiz',
    description: 'Participated in the Flipkart Runway - Season 4 quiz.',
    icon: '💼'
  },
  {
    title: 'HackOn with Amazon Session 4',
    description: 'Participated in the HackOn event with Amazon.',
    icon: '💻'
  },
  {
    title: 'E-Commerce & Tech-Quiz',
    description: 'Participated in the Flipkart Grid 6.0 Software Development Track quiz.',
    icon: '📊'
  },
  {
    title: 'HackerRank and GFG Stars',
    description: 'Achieved 4 stars in C, C++ on HackerRank and 2 stars in DSA on GFG.',
    icon: '⭐'
  },
];

const Achievement = ({ title, description, icon }) => (
  <div className="achievement">
    <span className="icon">{icon}</span>
    <h3 className="title">{title}</h3>
    <p className="description">{description}</p>
  </div>
);

const Achievements = () => {
  return (
    <section className="achievements-section">
      <h2>Achievements</h2>
      <div className="achievements-list">
        {achievementsData.map((achievement, index) => (
          <Achievement 
            key={index}
            title={achievement.title}
            description={achievement.description}
            icon={achievement.icon}
          />
        ))}
      </div>
      <Certificates/>
    </section>
  );
};

export default Achievements;

