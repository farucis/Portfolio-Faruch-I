import React from "react";
import "./Interests.css";

const InterestsList = [
  {
    name: "Competitive Gaming",
    info: "I like to challenge my reflexes a lot while competing in tennis games, pushing the rank and having interactive gaming sessions excites me the most.",
  },
  {
    name: "Music",
    info: "I like to listen to a variety of types of music, but mostly soothing music. Listening to soothing music is something I can never compromise with.",
  },
  {
    name: "Video Games",
    info: "I like to play video games, especially with my friends. I also play with my friends in the same game.",
  },
];

const Interests = () => {
  return (
    <div className="interests-container">
      {InterestsList.map((interest, index) => (
        <Interest name={interest.name} info={interest.info} index={index} />
      ))}
    </div>
  );
};

const Interest = (props) => {
  return (
    <div className="interest" key={props.index}>
      <div className="interest-name-title">
        <div>🔴</div>
        <h3>{props.name}</h3>
      </div>

      <p>{props.info}</p>
    </div>
  );
};

export default Interests;
