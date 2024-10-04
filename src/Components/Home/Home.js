import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./cv.pdf";
import { Link } from "react-router-dom";
import { Link } from "react-scroll";

function Home({ theme, changeTheme }) {
  return (
    <div className="container-fluid home" id="home">
      <div className="container home-content">
        <h1>Bonjour je suis WADDAD EL MEHDI</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                "Full Stack Software Developer",
                "IT Engineer",
                "Web Developer",
                "Mobile Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 5,
            }}
          />
        </h3>

        <div className="button-for-action">
          <Link
            to="contactsection"
            spy={true}
            smooth={true}
            duration={100}
            offset={-100}
          >
            <div className="hire-me-button">Contactez-moi</div>
          </Link>
          <div className="get-resume-button">
            <a href={MyCv} download="WADDADELMEHDI.pdf">
              Obtenir mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
