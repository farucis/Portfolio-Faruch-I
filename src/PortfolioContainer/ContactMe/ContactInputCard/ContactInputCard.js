import React from "react";
import "./ContactInputCard.css";

const ContactInputCard = () => {
  return (
    <div className="contact-input-container">
      <div className="contact-input">
        <h1>Name</h1>
        <input type="text" placeholder="Enter Your Name" />
        <h1>Email</h1>
        <input type="text" placeholder="Enter Your Email" />
        <h1>Massage</h1>
        <textarea placeholder="Enter Your Massage" />
        <button className="btn primary-btn">Send</button>
      </div>
    </div>
  );
};

export default ContactInputCard;
