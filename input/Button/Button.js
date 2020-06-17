import React from "react";

import "./Button.css";

import Spinner from "../../decorations/Spinner/Spinner";

export default function Button(props) {
  return (
    <div className="button">
      <button
        onClick={props.onButtonClick}
        disabled={props.disabled}
        data-testid="button"
      >
        {props.loading && <Spinner />}
        {props.text}
      </button>
    </div>
  );
}
