import React from "react";
import "./Title.css";
const Title = ({ subTitle, title }) => {
  /*make the title so we could use it multiple times */
  return (
    <div className="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
