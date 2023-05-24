import React from "react";
import Shoppingp1 from "../../assets/shopping-cart-crpd-p1.png";
import "./projects.css";

const Projects = () => {
    return(
        <section id="projects">
          <h5>My Projects</h5>
           <h2> Projects</h2>
           <div className="container">
            <div className="pronames">
                <div className="pro1">
                  {/* <img src={Shoppingp1} width="20%" height="30%"/> */}
                  <h3>Billing App</h3>
                  <p>Developed a Billing app using front-End technologies like Html, css, javascript,ReactJs, the app 
                    is used to generate the customer bill </p>
                    <div className='cta'>
        <a href="https://github.com/spurthiBS"  className="btn" target="_blank">Github</a>
        <a href="https://www.freebilling.in/#/home" className="btn btn-primary" target="_blank">Live Demo</a>
    </div>
                </div>
                <div className="pro1">
                <h3>Shopping Cart</h3>
                  <p>Developed a Billing app using front-End technologies like Html, css, javascript,ReactJs, the app 
                    is used for virtual shopping experience</p>
                    <div className='cta'>
        <a href="https://github.com/spurthiBS" className="btn" target="_blank">Github</a>
        <a href="" className="btn btn-primary" target="_blank">Live Demo</a>
    </div>
                </div>
                {/* <div className="pro1">
                <h3>XYZ</h3>
                  <p>Developed a Billing app using front-End technologies like Html, css, javascript,ReactJs, the app 
                    is used to generate the customer bill </p>
                    <p><a href="https://github.com/spurthiBS" className='btn'>Github</a></p>
                </div> */}
            </div>
            </div>
        </section>
    )
}

export default Projects;