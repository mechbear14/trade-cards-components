import React from "react";

import "./Choice.css";

/**
 * Props:
 * name: name of variable to choose for
 * choices: choices text to choose from, containing name and text properties
 * onSelect: function to fire when select
 */

export default function Choice(props) {
  return (
    <div className="choice">
      {props.choices.map((choice, index) => (
        <div className="option" key={choice.name}>
          <input
            type="radio"
            name={props.name}
            value={choice.value}
            id={choice.name}
            onChange={props.onSelect}
            defaultChecked={index === 0}
            data-testid={`${props.name}-radio`}
          />
          <label htmlFor={choice.name}>{choice.text}</label>
        </div>
      ))}
    </div>
  );
}
