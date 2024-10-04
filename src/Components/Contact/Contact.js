import React, { useState } from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Contact = () => {
  const API = "http://localhost:8080/sendemail";

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [jobtypes, setJobtypes] = useState();
  const [message, setMessage] = useState();

  const sendemailInfo = () => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        jobtypes,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.success("Your E-mail has been sent", {
            position: toast.POSITION.TOP_RIGHT,
          });

          setName("");
          setEmail("");
          setJobtypes("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container contact-section" id="contactsection">
      <div className="row">
        
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="contact-form-iamge">
              <img
                src="https://images.pexels.com/photos/1852361/pexels-photo-1852361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="contact form image"
              />
            </div>
          </div>
        

        
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact Me</h5>
              </div>
              <form>
                <div className="contact-form">
                  <label className="form-lebel">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">E-mail</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Job Types</label>
                  <select
                    className="custom-select-tag"
                    value={jobtypes}
                    onChange={(e) => setJobtypes(e.target.value)}
                  >
                    <option>Full-time</option>
                    <option>Working Student</option>

                    <option>Part-time</option>

                    <option>Contract</option>
                  </select>
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Message</label>
                  <textarea
                    rows="4"
                    type="text"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="button-submit" onClick={sendemailInfo}>
                  <p>
                    Send <RiSendPlaneFill size={20} />
                  </p>
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
