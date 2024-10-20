import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavC from "./components/NavC";
import About from './components/About';

import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
            <NavC />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
  );
}

export default App;
