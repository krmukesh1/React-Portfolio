import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="container container-center">
        <h1>{props.title}</h1>
        <small>{props.date}</small>
        <p>{props.content}</p>
        <a className="link link-primary" href={props.link} target="_blank">
          {props.primary_button}
        </a>
        <a className="link link-secondary" href={props.link}>
          {props.secondary_button}
        </a>
      </div>
    </>
  );
};
export default Card;
