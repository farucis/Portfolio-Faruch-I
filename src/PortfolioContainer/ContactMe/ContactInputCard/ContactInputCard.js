import React from "react";
import "./ContactInputCard.css";
import emailjs from "emailjs-com";
import { serviceID, templateID, userID } from "./emailjsKey";

const ContactInputCard = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result);
        document.getElementById("contact-form").reset();
      },
      (error) => {
        console.log(error);
      }
    );

    //document.forms["contadctForm"].reset();
  };

  return (
    <div className="contact-input-container">
      <div className="contact-input">
        <form
          id="contact-form"
          onSubmit={sendEmail}
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            width: "100%",
          }}
        >
          <h1>Name</h1>
          <input type="text" name="name" placeholder="Enter Your Name" />
          <h1>Email</h1>
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
          />
          <h1>Message</h1>
          <textarea name="message" placeholder="Enter Your Massage" />

          <button type="submit" className="btn primary-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactInputCard;
