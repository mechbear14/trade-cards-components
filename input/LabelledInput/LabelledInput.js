import React from "react";

import "./LabelledInput.css";

export default function LabelledInput(props) {
  let labelClass =
    props.value.length && props.value.length > 0 ? "filled" : "empty";
  let barClass = "top-bar";
  let onFocus = () => {
    barClass = "top-bar typing";
  };
  let onBlur = () => {
    barClass = "top-bar";
  };
  return (
    <div className="input">
      <label htmlFor="name" className={labelClass} data-test="label">
        {props.labelText}
      </label>
      <input
        type={props.type}
        id={props.propName}
        value={props.value}
        onChange={props.onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        data-test="input"
      />
      <div className="bottom-bar"></div>
      <div className={barClass} data-test="bar"></div>
    </div>
  );
}
