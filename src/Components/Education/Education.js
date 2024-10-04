import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const data = [
    {
      name: "l’École Marocaine des Sciences de l'Ingénieur( EMSI )",
      degree: "Ingenieur d etat reseau informatique option MIAGE",
      year: "2023-2025",
    },
    {
      name: "l’École Supérieure de Technologie de Casablanca ( ESTC )",
      degree:
        "Licence Professionnelle Développement et Administration Systèmes et Réseaux Informatiques",
      year: "2019-2020",
    },
    {
      name: "Institut Spécialisé de Technologie Appliquée Hay Hassani 1 ( ISTA )",
      degree: "Diplome technicien spécialisé en reseaux informatique",
      year: "2017-2019",
    },
    {
      name: "Facultés des sciences Hassan II Casablanca ( UH2C FSAC )",
      degree: "Etude en sciences des matières physiques et chimique",
      year: "2014-2017",
    },
    {
      name: "Lycée Badr Hay Hassani à Casablanca",
      degree: "Baccalaureate Sciences physiques et chimies",
      year: "2013-2014",
    },
  ];

  const colors = ["#000000", "#000000", "#000000", "#000000","#000000"];

  return (
    <div className="container education-section" id="education">
      <div className="section-title">
        <h5>Formation Professionnelle</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FFFFFF">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#FFFFFF" }}
              contentArrowStyle={{ borderRight: "7px solid  #000000" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#FFFFFF" }}
              icon={<FaGraduationCap />}
            >
              <b>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
              </b>
              <br />
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "#FFFFFF" }}
              >
                <b>{item.degree}</b>
              </h5>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
