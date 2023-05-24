import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi';

const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/spurthi-b-s-477a71208/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/spurthiBS" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/its_spoorthispoo/" target="_blank"><FiInstagram/></a>

    </div>
  )
}

export default Headersocials;