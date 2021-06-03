import React from "react";
import "./styles.css";
import tachyons from "tachyons";

const Card = (props) => {
  return (
    <div className="dib tc bg-dark-blue grow ma3 br3 pa3 ba">
      <img id="img" src={props.img} alt="avatar" />
      <h1>{props.name}</h1>
      <span>{props.work}</span>
    </div>
  );
};
export default Card;
