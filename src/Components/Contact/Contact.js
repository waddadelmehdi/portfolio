/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Contact.css";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub,FaFacebook } from "react-icons/fa6";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {



  return (
    <div className="container contact-section" id="contactsection">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="contact-form-iamge">
          <div class="container11"></div>
          </div>
        </div>

        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <div className="contact-form-design">
            <div className="text-center">
              <h5>Mes Contacts</h5>
            </div>
            <form>
              <div className="contact-form">
                <label className="form-lebel">Nom Complet </label>
                <input
                  type="text"
                  className="form-control"
                  value="WADDAD EL MEHDI"
                  
                />
              </div>

              <div className="contact-form">
                <label className="form-lebel">E-mail</label>
                <input
                  type="text"
                  className="form-control"
                  value="waddadelmehdi@gmail.com"
                  
                />
              </div>

              <div className="contact-form">
                <label className="form-lebel">Téléphone</label>
                <input
                  type="text"
                  className="form-control"
                  value="0640618211"
                  
                />
              </div>
              <br />

              <div className="contact-form">
              
              <a 
              
              href="https://www.linkedin.com/in/waddadelmehdi/" target="_blank" id="linkedin-link" rel="noreferrer"
              
              >< GrLinkedin/> LinkedIn</a>

              <a 
              
              href="https://github.com/waddadelmehdi" id="linkedin-link"
              target="_blank" rel="noreferrer"
              >< FaGithub/> GitHub</a>
                            <a 
              
              href="https://web.facebook.com/mehdiwadad/" id="linkedin-link"
              target="_blank" rel="noreferrer"
              >< FaFacebook/> Facebook</a>
              </div>


            </form>
          </div>
        </div>
      </div>

      <ToastContainer draggable autoClose={8000} />
    </div>
  );
};

export default Contact;
