import React, { useState } from "react";
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
          <a href="#" className="side">Home</a>
        </li>
        <li className="menu_list">
          <span className="front">
            <FontAwesomeIcon icon={faInfo} />
          </span>
          <a href="#" className="side">About</a>
        </li>
        <li className="menu_list">
          <span className="front">
            <FontAwesomeIcon icon={faBriefcase} />
          </span>
          <a href="#" className="side">Projects</a>
        </li>
        <li className="menu_list">
          <span className="front">
            <FontAwesomeIcon icon={faClipboardList} />
          </span>
          <a href="#" className="side">Skills</a>
        </li>
        <li className="menu_list">
          <span className="front">
            <FontAwesomeIcon icon={faFileAlt} />
          </span>
          <a href="#" className="side">Resume</a>
        </li>
        <li className="menu_list">
          <span className="front">
            <FontAwesomeIcon icon={faTrophy} />
          </span>
          <a href="#" className="side">Achievements</a>
        </li>
        <li className="menu_list">
          <span className="front">
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
          <a href="#" className="side">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavC;
