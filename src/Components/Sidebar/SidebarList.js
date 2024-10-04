import React from "react";
import "./SidebarList.css";
import profilepic from "../../Image/a.jpg";
import { BsFillHouseFill , BsFillPersonFill , BsMortarboardFill ,BsBriefcaseFill    } from "react-icons/bs";
import { DiCodeBadge } from "react-icons/di";
import { FiGlobe } from "react-icons/fi";
import { FaChessBoard } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";



import {
  FcNightPortrait,
  FcHome,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from "react-icons/fc";
import { Link } from "react-scroll";
import { MdBiotech } from "react-icons/md";

import { MdCastForEducation } from "react-icons/md";

function SidebarList({ expandSidebar }) {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile picture" />
          </div>
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <BsFillHouseFill size={25} />  Accueil
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <BsFillPersonFill size={25} /> À propos de moi

              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="workexperience"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <BsBriefcaseFill size={25} />Expérience 
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FiGlobe size={25}  />Technologies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <BsMortarboardFill size={25}  /> Formation
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <DiCodeBadge size={25} /> Projets
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FaChessBoard size={25} /> Certificats
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contactsection"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FaEnvelope size={25} /> Mes Contacts
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcNightPortrait size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="workexperience"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFactory size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdBiotech size={25} color="orange" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdCastForEducation size={25} color="yellow" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcSalesPerformance size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contactsection"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcContacts size={25} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}

export default SidebarList;
