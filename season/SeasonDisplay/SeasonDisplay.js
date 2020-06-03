import React from "react";
import "moment";

import "./SeasonDisplay.css";

export default function SeasonDisplay(props) {
  let dates = "NOT YET IMPLEMENTED";
  return (
    <div className="display">
      <div className="left">
        <span
          className="title"
          data-test="season-title"
          data-content={props.season.title}
        >
          {props.season.title}
        </span>
        <span className="dates" data-test="season-dates" data-content={dates}>
          {dates}
        </span>
      </div>
      <div className="right">
        <span
          className="label"
          data-test="season-label"
          data-content={props.season.label}
        >
          {props.season.label}
        </span>
      </div>
    </div>
  );
}
