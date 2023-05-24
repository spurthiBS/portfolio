
import React from 'react'
import Header from "./Header/header";
import Navigation from "./Navigation/nav";
import About from "./About/about";
import Education from "./Education/education";
import Experience from './Experience/experience';
import Projects from './Projects/projects';
import Contact from './Contact/contact';
import Footer from './Footer/footer';

const Componentapp = () => {
  return (
    <>
       <Header/>
       <Navigation/>
       <About/>
       <Experience/>
       <Education/>
       <Projects/>
       <Contact/>
       <Footer/>
    
    </>

  )
}

export default Componentapp;