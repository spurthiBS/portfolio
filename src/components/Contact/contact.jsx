
import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6vmovbq', 'template_ppmo2hf', form.current, 'guUQs8x0auANQVbGT')

        e.target.reset();
         
      };

    return(
        <section id="contact">
            <h5>My Contact</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_option-icon"/>
                        <h4>Email</h4>
                        <h5>spurthispoo123@gmail.com</h5>
                        <a href="mailto:spurthispoo123@gmail.com" target="_blank">Send a Mail</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className="contact_option-icon"/>
                       <h4>Whatsapp</h4>
                        <h5>8495973246</h5>
                        <a href="https://api.whatsapp.com/send?phone=+918495973246" target="_blank">Send a Message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTION*/}
                <form ref={form}  onSubmit={sendEmail} >
                    <input type="text" name='name' placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email Id" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
                
            </div>
           
        </section>
    )
}

export default Contact;