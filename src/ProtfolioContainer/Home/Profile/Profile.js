import React from "react";
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/faruch-ismailov/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/farucis">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://github.com/farucis">
                <i className="fa fa-google-plus-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Faruch</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>

                    "Full Stack Developer 💻",
                    1000,
                    "Software Engineer 🖥",
                    1000,
                    "Data Scientist 🛰",
                    1000,
                    "React/React Native Dev 📱",
                    1000,
                    "ASP.NET Dev 🌐",
                    1000,

              </h1>
              <span className="profile-role-tagline">
                knack of building applictions with front end back end
                operations.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="Faruch - CV.pdf" download="Faruch Ismailov CV">
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
