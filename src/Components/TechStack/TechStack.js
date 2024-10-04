import React, { useState } from "react";
import "./TechStack.css";
function TechStack() {
  const data = [
    {
      name: "Full Stack Developer",
    },
    {
      name: "Administrateur Windows Server",
    },
    {
      name: "Administrateur Linux",
    },
    {
      name: "Administrateur Oracle",
    },
    {
      name: "DATA WAREHOUSE",
    },
    {
      name: "Big DATA",
    },
    {
      name: "Python",
    },
    {
      name: "JAVA",
    },
    {
      name: "PHP",
    },
    {
      name: "Node js",
    },
    {
      name: "Javascript",
    },
    {
      name: "Typescript",
    },
    {
      name: "Python",
    },
    {
      name: "Django",
    },
    {
      name: "Angular",
    },
    {
      name: "React",
    },
    {
      name: "ASP.NET",
    },
    {
      name: "Spring Boot",
    },
    {
      name: "Symfony",
    },
    {
      name: "SQL Server",
    },
    {
      name: "MySQL",
    },
    {
      name: "C",
    },
    {
      name: "C++",
    },
    {
      name: "C#",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "Flutter",
    },
    {
      name: "Dart",
    },
    {
      name: "Kotlin",
    },
    {
      name: "DevOps",
    },
    {
      name: "CI/CD",
    },
    {
      name: "Docker",
    },
  ];

  const colors = [
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(9);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };
  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <h5>les Technologies Informatiques</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
            <div
              className={
                index === 0
                  ? "tech-content-marked tech-content"
                  : "tech-content"
              }
            >
              <span
                className="tech-number"
                style={{ backgroundColor: colors[index] }}
              >
                {index + 1}
              </span>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <span className="load-more-tech-stack" onClick={loadMore}>
          Load More
        </span>
      )}
    </div>
  );
}

export default TechStack;
