import React from 'react';
import { Card, CardContent, Typography} from '@mui/material';
import '../styles/Skills.css';
import 'react-multi-carousel/lib/styles.css';
import {
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiExpress,
  SiEjs,
  SiSqlite,
  SiMysql,
  SiMongodb,
  SiC,
  SiCplusplus,
} from 'react-icons/si';

import {
  FaPython,
  FaPhp,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
} from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    {
      category: 'Front-end',
      skills: [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Sass', icon: <SiSass /> },
        { name: 'Material UI', icon: <FaReact /> },
      ],
    },
    {
      category: 'Back-end',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'EJS', icon: <SiEjs /> },
        { name: 'SQL', icon: <SiSqlite /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
      ],
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'C', icon: <SiC /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'PHP', icon: <FaPhp /> },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'DSA', icon: <FaDatabase /> },
        { name: 'WordPress', icon: <FaWordpress /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2><hr />
      {skillsData.map((categoryData, categoryIndex) => (
        <div key={categoryIndex}>
          <h4>{categoryData.category}</h4>
          {/* Use Flexbox for horizontal layout */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {categoryData.skills.map((skill, index) => (
              <div key={index} style={{ padding: '10px' }}>
                <Card
                  sx={{
                    width: { md: '150px', xl: '170' },
                    margin: 'auto',
                    backgroundColor: '#f5f5f5',
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgb(246, 24, 213)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: 'auto',
                    }}>
                      {skill.icon}
                    </div>
                    <Typography variant="body2" align="center" className="skill-name">
                      {skill.name}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <hr />
        </div>
      ))}
      <hr />
    </section>
  );
};

export default Skills;
