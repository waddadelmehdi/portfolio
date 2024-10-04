import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const data = [
    {
      name: "The Hong Kong University of Science and Technology",
      position: "Software Engineering",
      des: " Modeling Software Systems using UML,Implementation and Testing, Software Design and Project Management",
      img: "https://publish.ust.hk/work/cal0001/calendar/prelim/logo/ustlogo.jpg",
    },
    {
      name: "LearnQuest",
      position: "Core Java",
      des: "Introduction to Java,Introduction to Object-Oriented Programming with Java,Object-Oriented Hierarchies in Java,Java Class Library",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3-zlgn9KhPuEAK5kYFECzbGvtmQf1DVT4g&s",
    },
    {
      name: "IBM",
      position: "DevOps, Cloud, and Agile Foundations",
      des: "Introduction to DevOps,Introduction to Cloud Computing,Introduction to Agile Development and Scrum",
      img: "https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg",
    },
    {
      name: "Meta",
      position: "React Native",
      des: "Mobile Development",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez1McrNMsAAXCEyFxpBq-TMyzkYZ7fe1S-w&s",
    },
    {
      name: "IBM",
      position: "Introduction to Artificial Intelligence (AI)",
      des: "Algorithms,Applied Machine Learning,Artificial Neural Networks,Deep Learning,Machine Learning",
      img: "https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg",
    },

    {
      name: "Amazon Web Services",
      position: "AWS Cloud Technical Essentials",
      des: "AWS services, AWS Identity and Access Management (IAM),Amazon EC2, AWS Lambda, and Amazon ECS,Database Service (Amazon RDS), Amazon DynamoDB, and Amazon S3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xSOmjyQY9nrbTygfa7prT2jC-7hjtqIkYg&s",
    },

    {
      name: "University of Michigan",
      position: "Programming for Everybody (Getting Started with Python)",
      des: "Algorithms,Computer Programming,Python Programming,Problem Solving",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6T1IZQY0-1Hub6rhGlgDk-iNF0pZHMTfQ8w&s",
    },

    {
      name: "Google",
      position: "Introduction to Git and GitHub",
      des: "version control,Git,GitHub,remote repositories",
      img: "https://yt3.googleusercontent.com/viNp17XpEF-AwWwOZSj_TvgobO1CGmUUgcTtQoAG40YaYctYMoUqaRup0rTxxxfQvWw3MvhXesw=s900-c-k-c0x00ffffff-no-rj",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const colors = [
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
  ];
  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="section-title">
        <h5>Les Certificats</h5>
        <span className="line"></span>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="content-slider-main">
              <div
                className="content-slider"
                key={index}
                style={{ backgroundColor: colors[index] }}
              >
                <img
                  src={item.img}
                  alt="testimonil imgae"
                  className="center-image"
                />
                <p>{item.name}</p>
                <p>{item.position}</p>
                <p>{item.des}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
