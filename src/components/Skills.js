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


const CustomLeftArrow = ({ onClick }) => (
    <button className="custom-arrow custom-left-arrow" onClick={onClick}>
      ‹
    </button>
  );
  
  const CustomRightArrow = ({ onClick }) => (
    <button className="custom-arrow custom-right-arrow" onClick={onClick}>
      ›
    </button>
  );

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
  const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1300 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1300, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };

  return (
          <section id="skills" className="skills-section">
            <h2>Skills</h2><hr/>
            {skillsData.map((categoryData, categoryIndex) => (
          <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4}  
                key={categoryIndex}
                sx={{ 
                  height: 'auto', 
                  margin: '1rem auto',
                  padding: { xs: '1rem', sm: '1rem' }, 
                  maxWidth: '600px', 
                  width: '100%',
                }}
              >
                <h4>{categoryData.category}</h4>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true} 
                  autoPlaySpeed={3000} 
                  customLeftArrow={<CustomLeftArrow />}
                  customRightArrow={<CustomRightArrow />}
                >
                  {categoryData.skills.map((skill, index) => (
                    <div key={index} style={{ padding: '10px' }}> 
                   
                    <Card 
                    sx={{ 
                      width: { md: '150px', xl :'170' }, 
                      margin: 'auto', 
                      backgroundColor: '#f5f5f5' 
                    }}
                  >
                        <CardContent sx={{ textAlign: 'center' }}>
                            <div style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              backgroundColor: ' rgb(246, 24, 213)',
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
                </Carousel>
                <hr />
                </Grid>
            ))}
            <hr />
          </section>
        );
};

export default Skills;
