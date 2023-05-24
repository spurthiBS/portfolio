import React from 'react';
import "./experience-data.css";
import "./experience.css";
import Data from "./data.js";
import ExpCard from "./experience-data"
 

const Experience = ()=> {
    return(
        <section id="experience">
            <h5>My Experience</h5>
           <h2> Experience</h2>
           {/*Call the data here*/}
           <div className="container exp">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
 
           <div className="exp-info">
           {
           Data.map((expinfo,index)=>{
            return(
                <div>
                  <ExpCard key={index} className="exp-info2">
                    
                     
                    <div className="expcard-info">
                      <h3 className="exp-icon">{expinfo.icon}</h3>
                      <h3 className="exp-title">{expinfo.title}</h3>
                      <h4 className="exp-role">{expinfo.Jobrole}</h4>
                      <h5 className="exp-projname">{expinfo.projectname1}</h5>
                      {/* <a href={expinfo.link} className="exp-prolink" target="_blank">{expinfo.link}</a> */}
                      <h5 className="exp-projname">{expinfo.projectname2}</h5>
                      <h5 className="exp-projname">{expinfo.projectname3}</h5>
                      <h6 className="exp-year">{expinfo.year}</h6>
                    </div>
                    
                    
                  </ExpCard>  
                </div>

            )
           })
        }
        </div>
        </div>
        <div className="col-lg-2"></div>
        </div>
        </div>

        </section>
    )
}

export default Experience;