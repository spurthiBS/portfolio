import React from 'react';
import  "./education.css";
import {SlGraduation} from "react-icons/sl";
import {BsCodeSquare} from "react-icons/bs";
import {BsBook} from "react-icons/bs";




const Education = () => {
    return(
        <section id="education">
                   <h5>My Education and Skills</h5>
                  <h2>Education and Skills</h2>
                  <div className="container">
                <div className="exp-skill-cards">
                    
                    <div className="exp-con">
                        
                      <h2 className="sk-headline"><SlGraduation/> Education</h2>
                      {/*stepper start here*/}
                      <div className="edu-stepper">
                        <h4><span className="edu-sec"><BsBook/></span>&nbsp;&nbsp;University of BDT engineering college,<br/> Davangere</h4>
                        <h5>Computer Science</h5>
                        <h5>2015 To 2019</h5>
                      </div>
                      <br/>
                      <div className="edu-stepper">
                        <h4><span className="edu-sec"><BsBook/></span>&nbsp;&nbsp;Kumadvathi Science and Commerce Pu College, <br/>Shikaripura</h4>
                        <h5>PUC</h5>
                        <h5>2013 To 2015</h5>
                      </div>
                      <br/>
                      <div className="edu-stepper">
                        <h4><span className="edu-sec"><BsBook/></span>&nbsp;&nbsp;Prakruthi Convent, Shikaripura</h4>
                        <h5>SSLC</h5>
                        <h5>2013</h5>
                      </div>
                      

                      {/*stepper ends here*/}
                      
                    </div>
                    <div className="skill-con-sec">
                        
                        <h2 className="sk-headline"><BsCodeSquare/> Skills</h2>
                        <div className="skill-con">

                        <div className="skills-set">
                        <h4>Technologies</h4>
                       <p><span className="sk">HTML</span></p>
                       <p><span className="sk">CSS</span></p>
                       <p><span className="sk">JAVASCRIPT</span></p>
                       <p><span className="sk">Bootstrap</span></p>
                       <p><span className="sk">React</span></p>
                       <p><span className="sk">Redux</span></p>
                       <p><span className="sk">Material UI</span></p>
                       <p><span className="sk">RESTful API's</span></p>


                       
                        </div>
                        <div className="skills-set">
                            <h4>Design Tools</h4>
                               <p><span className="sk"> Abode illustrator</span></p>
                               <p><span className="sk"> Abode photoshop 7.0</span></p>
                               <p><span className="sk">wordpress</span></p>
                               <p><span className="sk"> Webflow</span></p>
                               <p><span className="sk">Figma</span></p>
                        </div>
                       </div> 
                    </div>
      
                </div>
                </div>
            
        </section>
    )
}

export default Education;