
import React, { useState } from 'react'
import './nav.css';
import {BiHomeHeart} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {BsBook} from 'react-icons/bs';
import {RiSuitcaseLine} from 'react-icons/ri'
import {BsCodeSquare} from 'react-icons/bs';
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineColorLens} from 'react-icons/md'


const Navigation = () => {
    
    const[activeNav, setActivenav] = useState("#");

    return(
        <nav>
         <a href="#" onClick={obj=>setActivenav("#")} className={activeNav=="#" ? "active" : ""}><BiHomeHeart/></a>
         <a href="#about" onClick={obj=>setActivenav("#about")} className={activeNav=="#about" ? "active" : ""}><AiOutlineUser/></a>
         <a href="#experience" onClick={obj=>setActivenav("#experience")} className={activeNav=="#experience" ? "active" : ""}><RiSuitcaseLine/></a>
         <a href="#education" onClick={obj=>setActivenav("#education")} className={activeNav=="#education" ? "active" : ""}><BsBook/></a>
        
         <a href="#projects" onClick={obj=>setActivenav("#projects")} className={activeNav=="#projects" ? "active" : ""}><BsCodeSquare/></a>
         <a href="#contact" onClick={obj=>setActivenav("#contact")} className={activeNav=="#contact" ? "active" : ""}><BsTelephone/></a>
        
        </nav>
    )
}

export default Navigation;