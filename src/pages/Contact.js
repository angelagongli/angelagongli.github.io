import React from "react";
import resume from "../assets/other/resume.pdf"
import headshotSmall from "../assets/images/headshot-small.JPG";
import headshotBig from "../assets/images/headshot-big.JPG";
import headshotCropped from "../assets/images/headshot-cropped.jpg";
import headshotCroppedBig from "../assets/images/headshot-cropped-big.jpg";

function Contact() {
    return (
        <div className="container main-content">
            <div className="row">
                <div className="col-12">
                    <h1>Contact</h1>
                </div>
            </div>
            <div className="row contact-container">
                <div className="col-12 col-lg-6">
                    <picture>
                        <source media="(max-width: 400px)"
                                srcSet={`${headshotCropped} 1x,
                                        ${headshotCroppedBig} 2x`} />
                        <source media="(min-width: 401px) and (max-width: 666px)"
                                srcSet={`${headshotSmall} 1x,
                                        ${headshotBig} 2x`} />
                        <source media="(min-width: 666px)"
                                srcSet={headshotBig} />
                        <img src={headshotBig}
                                className="img-fluid" id="headshot" alt="headshot"/>
                    </picture>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="contact-links">
                        <i className="fas fa-phone-square-alt"></i> 713-550-0691<br />
                        <i className="fab fa-github"></i> <a href="https://github.com/angelagongli" target="_blank">https://github.com/angelagongli</a><br />
                        <i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/angelagongli" target="_blank">https://www.linkedin.com/in/angelagongli</a><br />
                        <i className="fas fa-envelope-square"></i> <a href="mailto:angelagongli@gmail.com">Click to e-mail me</a><br />
                        <i className="fas fa-file-pdf"></i> <a href={resume} target="_blank">Click to view resume</a><br />
                    </div>            
                </div>
            </div>    
        </div>
    );
  }
  
export default Contact;
  