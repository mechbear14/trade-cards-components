import React from "react";

import "./SeasonListItem.css";

export default function SeasonListItem(props) {
  return (
    <div className="season-list-item">
      <div className="title-box">
        <span className="label" data-test="label">
          {props.season.label}
        </span>
        <span className="title" data-test="title">
          {props.season.title}
        </span>
        <span className="status" data-test="status">
          {status}
        </span>
      </div>
      <div className="detail-box hide" data-test="detail-box">
        <div className="detail-item">
          <span>Date: </span>
          <span className="dates" data-test="dates">
            {dates}
          </span>
        </div>
        <div className="detail-item">
          <span>Register open:</span>
          <span className="register-times" data-test="register-times">
            {registerTimes}
          </span>
        </div>
        <div className="detail-item button-box">
          <button className="normal">Edit</button>
          <button className="danger">End register</button>
          <button className="danger">End season</button>
        </div>
      </div>
    </div>
  );
}
