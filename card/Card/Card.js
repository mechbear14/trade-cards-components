import React from "react";
import "./Card.css";

/**
 * Props:
 * card: The card object to render
 * small: Whether to render as a small card
 * onClick:
 */
function Card(props) {
  return (
    <div
      className={`card ${props.card.kind} ${props.small ? "small" : ""}`}
      onClick={props.onClick}
    >
      {props.card.text}
    </div>
  );
}

export default Card;
