import React from "react";
import "./ContactInputCard.css";
import emailjs from "emailjs-com";
import { serviceID, templateID, userID } from "./emailjsKey";

const ContactInputCard = () => {
  //const [inputsValid, setInputsValid] = React.useState([true, true, true]);
  const inputsValid = [true, true, true];

  const formHandler = (e) => {
    //e.target["name"].value.length < 1 && setInputsValid([false, true, true]);
    //e.target["user_email"].value.length < 1 && setInputsValid([true, false, true]);
    //e.target["message"].value.length < 1 && setInputsValid([true, true, false]);

    console.log(inputsValid);
    inputsValid.nameInput && inputsValid.emailinput && inputsValid.messageInput
      ? sendEmail(e)
      : e.preventDefault();
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result);
        e.target.reset();
      },
      (error) => {
        //console.log(error);
      }
    );

    //document.forms["contadctForm"].reset();
  };

  return (
    <div className="contact-input-container">
      <div className="contact-input">
        <form
          id="contact-form"
          name="contact-form"
          onSubmit={formHandler}
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
