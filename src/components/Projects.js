// import React from 'react';
// import '../styles/Projects.css';
// import SimonImage from '../image/Simon.jpg';
// import CalculatorImage from '../image/Calculator.jpg';
// import MyntraImage from '../image/Myntra.png';
// import StopwatchImage from '../image/Stopwatch.jpg';
// import TicImage from '../image/Tic.jpg';
// import MaterializeImage from '../image/Materialize.png';
// import WeatherImage from '../image/weather.jpg';

// const projects = [
//   {
//     title: 'Sassy Sequences',
//     description: 'Sassy Sequences is a memory game where players follow a sequence of commands given by Simon.',
//     link: 'https://play-simon-say.netlify.app/',
//     github: 'https://github.com/Pritee668/simonSayGame', 
//     tech: ['React', 'JavaScript', 'CSS'],
//     image: SimonImage, 
//   },
//   {
//     title: 'Atmosphere Insight',
//     description: 'A weather app that delivers temperature, wind speed, and humidity updates.',
//     link: 'https://simple-weather-info-app.netlify.app/',
//     github: 'https://github.com/Pritee668/weatherProject', 
//     tech: ['React', 'API', 'CSS'],
//     image: WeatherImage, 
//   },
//   {
//     title: 'Gridlock Challenge',
//     description: 'Gridlock Challenge is a customizable Tic Tac Toe game where players can increase the grid size.',
//     link: 'https://tic-tac-toe-simplegame.netlify.app/',
//     github: 'https://github.com/Pritee668/Tic_tac_Toe_Game', 
//     tech: ['JavaScript', 'HTML', 'CSS'],
//     image: TicImage, 
//   },


//   {
//     title: 'MathMate',
//     description: ' An intuitive calculator that simplifies mathematical operations for quick and easy calculations.',
//     link: 'https://easy-to-use-calculator.netlify.app/',
//     github: 'https://github.com/Pritee668/calculator', 
//     tech: ['React', 'JavaScript', 'CSS'],
//     image: CalculatorImage, 
//   },
//   {
//     title: 'Material Magic: A Responsive Clone',
//     description: 'A responsive web clone built with HTML, CSS, and Materialize CSS for seamless multi-device access..',
//     link: 'https://simple-page-materialize-css.netlify.app/',
//     github: 'https://github.com/Pritee668/materialize-css', 
//     tech: ['Html','Css','Materialize Css'],
//     image: MaterializeImage, 
//   },
//   {
//     title: 'Time Wizard',
//     description: 'A sleek stopwatch application designed to help you track time with precision and ease.',
//     link: 'https://effective-stopwatch.netlify.app/',
//     github: 'https://github.com/Pritee668/stop-watch', 
//     tech: ['JavaScript', 'HTML', 'CSS'],
//     image: StopwatchImage, 
//   },
// ];

// const core=[
//   {
//     title: ' Myntra Clone with Enhanced Features',
//     description: ' An e-commerce clone of Myntra with style-based collections, movie-themed items, fashion challenges, a social lookbook, and an interactive fashion chatbot.',
//     link: 'https://extraordinary-cascaron-53b271.netlify.app/',
//     github: 'https://github.com/Pritee668/myntra-app', 
//     tech: ['JavaScript', 'HTML', 'CSS','React','API','Bootstrap'],
//     image: MyntraImage,  
//   }
// ]

// const Projects = () => {
//   return (
//     <>
//     <section id="projects" className="projects-section">
//       <h2>Micro Projects</h2>
//       <div className="project-list">
//         {projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <img src={project.image} alt={project.title} className="project-image" />
//             <div className='Alltext'>
//             <h6>{project.title}</h6>
//             <p>{project.description}</p>
//             <p><strong>Technologies Used:</strong> {project.tech.join(', ')}</p>
//             <div className="project-buttons">
//               <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
//                 View Project
//               </a>
//               <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
//                 GitHub
//               </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//     <section id="projects" className="projects-section">
//   <h3>Core Projects</h3>
//   <div className="project-list">
//     {core.map((project, index) => (
//       <div key={index} className="cproject-card">
//         <img src={project.image} alt={project.title} className="project-image" />
//         <div className='Alltext'>
//           <h6>{project.title}</h6>
//           <p>{project.description}</p>
//           <p><strong>Technologies Used:</strong> {project.tech.join(', ')}</p>
//           <div className="project-buttons">
//             <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
//               View Project
//             </a>
//             <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
//               GitHub
//             </a>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>
//     </>
//   );
// };

// export default Projects;


























import React from 'react';
import '../styles/Projects.css';
import SimonImage from '../image/Simon.jpg';
import CalculatorImage from '../image/Calculator.jpg';
import MyntraImage from '../image/Myntra.png';
import StopwatchImage from '../image/Stopwatch.jpg';
import TicImage from '../image/Tic.jpg';
import MaterializeImage from '../image/Materialize.png';
import WeatherImage from '../image/weather.jpg';

const projects = [
  {
    title: 'Sassy Sequences',
    description: 'Sassy Sequences is a memory game where players follow a sequence of commands given by Simon.',
    link: 'https://play-simon-say.netlify.app/',
    github: 'https://github.com/Pritee668/simonSayGame',
    tech: ['HTML', 'JavaScript', 'CSS'],
    image: SimonImage,
  },
  {
    title: 'Atmosphere Insight',
    description: 'Atmosphere Insight: A weather app that delivers temperature, wind speed, and humidity updates.',
    link: 'https://simple-weather-info-app.netlify.app/',
    github: 'https://github.com/Pritee668/weatherProject',
    tech: ['HTML', 'API', 'CSS','JS'],
    image: WeatherImage,
  },
  {
    title: 'Gridlock Challenge',
    description: 'Gridlock Challenge is a customizable Tic Tac Toe game where players can increase the grid size.',
    link: 'https://tic-tac-toe-simplegame.netlify.app/',
    github: 'https://github.com/Pritee668/Tic_tac_Toe_Game',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: TicImage,
  },
  {
    title: 'MathMate',
    description: 'An intuitive calculator that simplifies mathematical operations for quick and easy calculations.',
    link: 'https://easy-to-use-calculator.netlify.app/',
    github: 'https://github.com/Pritee668/calculator',
    tech: ['HTML', 'JavaScript', 'CSS'],
    image: CalculatorImage,
  },
  {
    title: 'Material Magic: A Responsive Clone',
    description: 'A responsive web clone built with HTML, CSS, and Materialize CSS for seamless multi-device access.',
    link: 'https://simple-page-materialize-css.netlify.app/',
    github: 'https://github.com/Pritee668/materialize-css',
    tech: ['HTML', 'CSS', 'Materialize CSS'],
    image: MaterializeImage,
  },
  {
    title: 'Time Wizard',
    description: 'A sleek stopwatch application designed to help you track time with precision and ease.',
    link: 'https://effective-stopwatch.netlify.app/',
    github: 'https://github.com/Pritee668/stop-watch',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: StopwatchImage,
  },
];

const core = [
  {
    title: 'Myntra Clone with Enhanced Features',
    description: 'An e-commerce clone of Myntra with style-based collections, movie-themed items, fashion challenges, a social lookbook, and an interactive fashion chatbot.',
    link: 'https://extraordinary-cascaron-53b271.netlify.app/',
    github: 'https://github.com/Pritee668/myntra-app',
    tech: ['JavaScript', 'HTML', 'CSS', 'React', 'API', 'Bootstrap'],
    image: MyntraImage,
  }
];

const Projects = () => {
  return (
    <>
      <section id="projects" className="projects-section">
        <h2>Micro Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className='Alltext'>
                <h6>{project.title}</h6>
                <p>{project.description}</p>
                <p><strong>Technologies Used:</strong> {project.tech.join(', ')}</p>
                <div className="project-buttons">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="projects" className="projects-section">
        <h3>Core Projects</h3>
        <div className="project-list">
          {core.map((project, index) => (
            <div key={index} className="cproject-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className='Alltext'>
                <h6>{project.title}</h6>
                <p>{project.description}</p>
                <p><strong>Technologies Used:</strong> {project.tech.join(', ')}</p>
                <div className="project-buttons">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;

