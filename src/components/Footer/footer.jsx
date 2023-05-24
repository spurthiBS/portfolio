import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo"></a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/*this is comment*/}

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/spurthi-b-s-477a71208/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/its_spoorthispoo/" target="_blank">
          <FiInstagram /> 
        </a>
        <a href="https://github.com/spurthiBS" target="_blank">
          <FaGithub /> 
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy;Spurthi portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
