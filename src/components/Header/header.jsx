
import React from 'react'
import CTA from "./CTA";
import ME from "../../assets/me.png";
import Headersocials from "./headersocials";
import './header.css';

<>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</>


const Header= () => {
  return (
    <header>
        <div className="container header_container">
          <div class="sonar-wrapper">
	          <div class="sonar-emitter">
                <div class="sonar-wave"></div>
            </div>
          </div>
            <h5>Hello I'm</h5>
            <h1>Spurthi B S</h1>
            <h5 className="text-light">React Developer</h5>
            <CTA></CTA>
            <Headersocials/>
            <div className="me">
                <img src={ME} alt="me"/>
            </div>

            <a href="#contact" className="scroll__down">Scroll Down Here</a>
            
        </div>
    </header>
  )
};

export default Header