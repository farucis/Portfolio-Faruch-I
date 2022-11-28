import React from "react";
import "./ContactInfoCard.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactInfoCard = () => {
  return (
    <div className="contact-info-container">
      <div className="contact-info-parent">
        <div style={{ width: "330px", display: "flex" }}>
          <h1>Get In Touch 📧</h1>
          <span className="infi-input-loop" />
        </div>
        <div className="contact-info-icons">
          <div className="contact-info-icon">
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
            <i >
              <label>
                <SiGmail />
              </label>
            </i>
          </div>
        </div>
      </div>
      <div className="contact-info-email">
        <div className="contact-info-email-parent">
          <h2>Send Your Email Here!</h2>
          <img
            className="contact-info-image"
            src={require("../../../assets/mailz.jpeg").default}
            alt="reloud page"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
