

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../styles/NavC.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faBriefcase,
  faPaperPlane,
  faBars,
  faTimes,
  faTrophy,
  faFileAlt,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";





const NavC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
      setIsOpen(!isOpen);
  };

  return (
      <div>
          <div className="hamburger" onClick={toggleNavbar}>
              {isOpen ? (
                  <FontAwesomeIcon icon={faTimes} />
              ) : (
                  <FontAwesomeIcon icon={faBars} />
              )}
          </div>

          <ul className={`menu ${isOpen ? "open" : ""}`}>
              <li className="menu_list">
                  <span className="front">
                      <FontAwesomeIcon icon={faHome} />
                  </span>
                  <Link to="/" className="side">Home</Link>
              </li>
              <li className="menu_list">
                  <span className="front">
                      <FontAwesomeIcon icon={faInfo} />
                  </span>
                  <Link to="/about" className="side">About</Link>
              </li>
              <li className="menu_list">
                  <span className="front">
                      <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <Link to="/projects" className="side">Projects</Link>
              </li>
              <li className="menu_list">
                  <span className="front">
                      <FontAwesomeIcon icon={faClipboardList} />
                  </span>
                  <Link to="/skills" className="side">Skills</Link>
              </li>
              <li className="menu_list">
                  <span className="front">
                      <FontAwesomeIcon icon={faFileAlt} />
                  </span>
                  <Link to="/resume" className="side">Resume</Link>
              </li>
              <li className="menu_list">
                  <span className="front">
                      <FontAwesomeIcon icon={faTrophy} />
                  </span>
                  <Link to="/achievements" className="side">Achievements</Link>
              </li>
              <li className="menu_list">
                  <span className="front">
                      <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                  <Link to="/contact" className="side">Contact</Link>
              </li>
          </ul>
      </div>
  );
};
export default NavC;










