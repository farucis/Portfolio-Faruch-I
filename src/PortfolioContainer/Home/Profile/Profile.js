import React from "react";
import Typical from "react-typical";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/faruch-ismailov/">
                <label>
                  <FaLinkedin />
                </label>
              </a>
              <a href="https://github.com/farucis">
                <label>
                  <FaGithubSquare />
                </label>
              </a>
              <a href="#Contact" onClick={() => scrollTolocation()}>
                <label>
                  <SiGmail />
                </label>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Faruch</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer 💻",
                    1000,
                    "Software Engineer 🖥",
                    1000,
                    "Data Scientist 🛰",
                    1000,
                    "React/React Native 📱",
                    1000,
                    "ASP.NET Dev 🌐",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                knack of building applictions with front end back end
                operations.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => scrollTolocation()}
            >
              Hire Me
            </button>
            <a href="Faruch Ismailov - CV.pdf" download="Faruch Ismailov - CV">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-image">
          <div className="profile-image-backround"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

//////////////////////////////////////////////////////////////////////////////////////////
export const scrollTolocation = (locationName = "contact") => {
  const contactMeElement = document.getElementById(locationName);
  const location = contactMeElement.offsetTop;
  window.scrollTo({
    top: location,
  });
};
