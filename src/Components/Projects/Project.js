import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "SITE WEB DE LOGEMENTS",
      des: "Un site web de logements est une application web permettant aux utilisateurs de rechercher, consulter et réserver des logements (maisons, appartements, chambres, etc.). Le backend, développé en Spring Boot (Java), assure la gestion des utilisateurs, la recherche de logements, les réservations et les paiements, tout en offrant une architecture modulaire et une sécurité renforcée. Le frontend, développé en Angular (JavaScript), propose une interface utilisateur conviviale et interactive, facilitant la navigation, la consultation des annonces et les réservations. La combinaison de Spring Boot et Angular permet de construire une application web moderne, performante et offrant une expérience utilisateur fluide.",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "Spring Boot",
        },
        {
          techname: "Java",
        },
        {
          techname: "Angular",
        },
        {
          techname: "Javascript",
        },
      ],
    },

    {
      name: "SITE WEB D'AMEUBLEMENT",
      des: "Un site web d'ameublement est une application permettant aux utilisateurs de parcourir, rechercher et acheter des meubles en ligne. Le backend est développé en ASP.NET avec C#, offrant une gestion efficace des fonctionnalités serveur telles que la gestion des produits, des utilisateurs, et des commandes, avec une sécurité et une intégration solides. Le frontend utilise Bootstrap, fournissant une interface utilisateur moderne, réactive et adaptée à tous les types d'écrans, pour une navigation simple et intuitive. La combinaison ASP NET et Bootstrap permet de créer une application web performante avec une expérience utilisateur fluide et agréable.",
      techused: [
        {
          techname: "ASP.NET",
        },
        {
          techname: "C#",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "Razor",
        },
      ],
    },

    {
      name: "SITE WEB DE RECRUTEMENT",
      des: "Un site web de recrutement est une application web permettant aux utilisateurs de rechercher des offres d'emploi, postuler à des postes, et pour les recruteurs de publier des offres et gérer les candidatures. Le backend est développé en Django (Python), offrant une gestion performante des fonctionnalités côté serveur, incluant la gestion des utilisateurs, des offres d'emploi et des candidatures, avec une sécurité renforcée et une facilité d'intégration avec une base de données. Le frontend utilise Bootstrap, offrant une interface utilisateur réactive et moderne, facilitant la navigation et l'interaction. La combinaison de Django et Bootstrap permet de créer une application web performante et agréable à utiliser. ",
      techused: [
        {
          techname: "Django",
        },
        {
          techname: "Python",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "Twig",
        },
      ],
    },
    {
      name: "APPLICATION MOBILE PORTAIL",
      des: "Une application mobile de portail étudiant permet aux étudiants de suivre leurs cours, consulter leurs notes, et gérer leurs examens de manière pratique. Développée avec Flutter et Dart, l'application offre une interface utilisateur fluide et cross-platform, accessible sur Android et iOS, assurant une expérience utilisateur homogène et réactive. Le backend est géré avec JSON Server, fournissant un serveur léger pour le stockage et la gestion des données, facilitant les interactions entre l'application et les informations sur les cours et examens. La combinaison de Flutter et JSON Server garantit une application légère, rapide, et facile à utiliser pour les étudiants.",
      techused: [
        {
          techname: "Flutter",
        },
        {
          techname: "Dart",
        },
        {
          techname: "JSON Server",
        },
        {
          techname: "Bootstrap",
        },
      ],
    },
  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <h5>Les Projets</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
