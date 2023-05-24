import React from "react";
import "./about.css";
import ME from "../../assets/about-me.jpeg";
import Card from "./Card";
import Data from "./data";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about-me">
          <div className="about__me-image">
            <img src={ME} alt="me-img" />
          </div>
        </div>
        <div className="about__content mb-5">
          <div className="about__cards">
             {

                 Data.map((info,index)=>{
                    return(
                        <>
                            <Card className="about__cards">
                            <div className="card-info">
                            <p className="card-icon" >{info.icon}</p>
                            <h4 className="card-tit">{info.title}</h4>
                            <h5 className="card-discrip">{info.desc}</h5>
                            </div>
                            </Card>
                        </>
                    )
                 })
             }
          </div>
         <div className="">
          <h5>As a web developer with 1.3 years of experience, I'm passionate about building modern, user-friendly websites.
             I've worked with coding languages like HTML, CSS, Bootstrap, and WordPress.
              I have also had experience using Adobe Illustrator and Photoshop to design graphics for webinars.</h5><br/>
              <h5>I developed a billing app project using technologies like Javascript and React with my knowledge of hooks, 
                react routers, and rest APIs. I used these programmes during a six-month internship at Infocampus.</h5>
         </div>
         
        </div>
      </div>
    </section>
  );
};

export default About;
