import React from "react";

export default function Display(props) {
  return (
    <div className="display">
      <div className="left">
        <span className="title">{props.season.title}</span>
        {props.season.description && (
          <span className="desc">{props.season.description}</span>
        )}
      </div>
      <div className="right">
        <span className="label">{props.season.label}</span>
      </div>
    </div>
  );
}
