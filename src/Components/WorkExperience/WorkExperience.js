import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "EMSI:l’École Marocaine des Sciences de l'Ingénieur",
      position: "IT Support",
      des: "l'installation des post de travail l'installation des imprimantes configuration telephone ip ( VOIP , 3CX ,Grandstream ) Résoudre des problèmes techniques (Connectivité,Affichage...) L'installation des logiciels informatique",
      year: "2021-2022",

      techskills: [
        {
          techname: "VoIP",
        },
        {
          techname: "3CX",
        },
        {
          techname: "ARUBA",
        },
        {
          techname: "Cisco",
        },
        {
          techname: "Dell",
        },
      ],
    },

    {
      companyname: "Institut Spécialisé de Technologie Appliquée Hay Hassani 1",
      position: "Stagiaire Reséaux",
      des: "L'istalation et Configuration d'un Server AAA cisco",
      year: "2016-2017",

      techskills: [
        {
          techname: "Cisco CCNA",
        },
        {
          techname: "Wireshark",
        },
        {
          techname: "Cisco Packet Tracer",
        },
        {
          techname: "Windows Server",
        },
        {
          techname: "Linux",
        },
      ],
    },
  ];

  const colors = ["#FFFFFF"];

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title">
        <h5>Expérience Professionnelle</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#000000">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#000000" }}
              contentArrowStyle={{ borderRight: "7px solid  #000000" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#000000" }}
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
