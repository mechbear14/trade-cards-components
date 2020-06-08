import React from "react";

import "./CardInput.css";

export default function CardInput(props) {
  return (
    <div className="card-input">
      <label htmlFor="card-text">
        <div
          className={`card ${props.card.kind}`}
          onInput={props.onChange}
          contentEditable
          placeholder="Card text"
          id="card-text"
        ></div>
      </label>
    </div>
  );
}
