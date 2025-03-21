import React from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import '../styles/Skills.css';
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

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2>Skills</h2>
        <hr />
        {skillsData.map((categoryData, categoryIndex) => (
          <div key={categoryIndex} className="skills-category">
            <h3>{categoryData.category}</h3>
            <Grid container spacing={2} justifyContent="center">
              {categoryData.skills.map((skill, index) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                  <Card sx={{ 
                    backgroundColor: '#f5f5f5', 
                    textAlign: 'center',
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 'auto'
                  }}>
                    <CardContent>
                      <div
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          backgroundColor: 'rgb(246, 24, 213)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: 'auto',
                        }}
                      >
                        <span style={{ fontSize: '30px', color: 'white' }}>{skill.icon}</span>
                      </div>
                      <Typography variant="body2" sx={{ marginTop: '8px', fontSize: '14px' }}>
                        {skill.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <hr />
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Skills;
