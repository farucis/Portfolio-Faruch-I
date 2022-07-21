import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = () => {
  return (
    <div className="contact-info-container">
      <div className="contact-info-parent">
        <h1>Get In Touch 📧</h1>
        <div className="contact-info-icons">
          <div className="contact-info-icon">
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
