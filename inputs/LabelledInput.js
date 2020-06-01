import React from "react";

export default function LabelledInput(props) {
  let inputIsFilled = props.value && props.value.toString().length > 0;
  let labelClass = inputIsFilled ? "filled" : "empty";
  let topBarClass = "";
  let onFocus = () => {
    labelClass = "filled";
    topBarClass = "typing";
  };
  let onBlur = () => {
    labelClass = inputIsFilled ? "filled" : "empty";
    topBarClass = "";
  };

  return (
    <div className="labelled-input">
      <label htmlFor={props.name} className={labelClass}>
        {props.labelText}
      </label>
      <input
        type={props.type || "text"}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div className="bottom-bar"></div>
      <div className={`top-bar ${topBarClass}`}></div>
    </div>
  );
}
