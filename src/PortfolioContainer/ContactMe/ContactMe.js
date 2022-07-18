import React from "react";
import "./ContactMe.css";

import TitleHeader from "../Header/TitleHeader";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactInputCard from "./ContactInputCard/ContactInputCard";

const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <TitleHeader title="Contact" subTitle="Lets Keep In Touch" />
      <div className="contact-container">
        <ContactInfoCard />
        <ContactInputCard />
      </div>
    </div>
  );
};

export default ContactMe;
