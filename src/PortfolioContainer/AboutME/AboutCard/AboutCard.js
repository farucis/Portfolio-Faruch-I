import React from "react";
import { scrollTolocation } from "../../Home/Profile/Profile";
import "./AboutCard.css";

const AboutCard = () => {
  const infoText =
    "Full stack web and mobile developer with ability to work under pressure and highly motivated for new knowledge in the programming industry. Responsible, fast learner and a team player ,along with a  knack of building applications with utmost efficiency. Seeking a position in software development that will utilize my knowledge in python, Javascript, React, React-Native development and my C/C++/python/Java programming skills. Strong professional with a BSC willing to be an asset for an organization.";
  const detailsText = [
    "Full Stack web and mobile development",
    "Interactive Front End as per the design",
    "React and React Native",
    "Redux for State Mnanagement",
    "Building REST API",
    "Managing database",
  ];

  return (
    <div className="aboutCard-container">
      <div className="aboutCard-parent">
        <div className="aboutCard-image" />

        <div className="aboutCard-text-container">
          <div className="aboutCard-text-info">
            <p>{infoText}</p>
          </div>
          <div className="aboutCard-text-details">
            <h1>Here are a Few Highlights</h1>
            {detailsText.map((detail, index) => (
              <div className="detail-option" key={index}>
                🔴
                <h2>{detail}</h2>
              </div>
            ))}
          </div>
          <div className="About-options">
            <button
              className="btn primary-btn"
              onClick={() => scrollTolocation()}
            >
              Hire Me
            </button>
            <a href="Faruch Ismailov - CV.pdf" download="Faruch Ismailov CV">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
