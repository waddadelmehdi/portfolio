import React from "react";
import "./About.css";
import ProfilePic from "../../Image/a.jpg";

function About() {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={ProfilePic} alt="Profile Photo" />
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>À propos de moi</h5>
              <span className="line"></span>
            </div>
            <br />

            <p>
              Je m'appelle Waddad El Mehdi, actuellement étudiant en 5ème année
              d'Ingénierie Informatique et Réseaux (5IIR) à l'École Marocaine
              des Sciences de l'Ingénieur (EMSI). Passionné par le monde de la
              technologie et de l'innovation, je m'efforce de développer des
              compétences techniques solides en réseaux informatiques,
              développement logiciel et ingénierie des systèmes. Résidant à
              Casablanca, Maroc, je m'inspire de l'environnement dynamique de
              cette ville pour poursuivre mon ambition de devenir un ingénieur
              capable de proposer des solutions novatrices aux défis du monde
              numérique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
