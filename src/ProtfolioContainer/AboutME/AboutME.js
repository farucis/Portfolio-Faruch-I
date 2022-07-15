import React from "react";
import TitleHeader from "../Header/TitleHeader";
import AboutCard from "./AboutCard/AboutCard";

const AboutME = () => {
  return (
    <div className="about-me-container" id='aboutMe'>
      <div className="about-me-parent">
        <TitleHeader title="About Me" subTitle="Why Choose Me?" />
        <AboutCard />
      </div>
    </div>
  );
};

export default AboutME;
