import React from "react";

export default function Button(props) {
  return (
    <div className="button">
      <button
        onClick={props.onButtonClick}
        disabled={props.disabled}
        data-testid="button"
      >
        {props.text}
      </button>
    </div>
  );
}
