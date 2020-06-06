import React from "react";
import moment from "moment";

import { datesToMsg, timesToMsg } from "../SeasonDisplay/SeasonDisplay";

import "./SeasonListItem.css";

export default function SeasonListItem(props) {
  let today = moment(props.today);
  let registerStartTime = moment(props.season.registerStartTime);
  let registerEndTime = moment(props.season.registerEndTime);
  let seasonStartDate = moment(props.season.seasonStartDate);
  let seasonEndDate = moment(props.season.seasonEndDate);

  let notOpen = today.isBefore(registerStartTime);
  let registerOpen =
    today.isAfter(registerStartTime) && today.isBefore(registerEndTime);
  let registerClosed =
    today.isAfter(registerEndTime) && today.isBefore(seasonStartDate);
  let seasonStarted =
    today.isAfter(seasonStartDate) && today.isBefore(seasonEndDate);
  let seasonEnded = today.isAfter(seasonEndDate);

  let status = "Loading";
  if (notOpen) status = "Not open yet";
  else if (registerOpen) status = "Register open";
  else if (registerClosed) status = "Register closed";
  else if (seasonStarted) status = "Season started";
  else if (seasonEnded) status = "Season ended";
  else status = "Error";

  let registerTimes = timesToMsg(
    props.season.registerStartTime,
    props.season.registerEndTime
  );

  let dates = datesToMsg(
    props.season.seasonStartDate,
    props.season.seasonEndDate
  );

  return (
    <div className="season-list-item">
      <div className="title-box" data-testid="title-box">
        <span className="label" data-testid="label">
          {props.season.label}
        </span>
        <span className="title" data-testid="title">
          {props.season.title}
        </span>
        <span className="status" data-testid="status">
          {status}
        </span>
      </div>
      <div className="detail-box hide" data-testid="detail-box">
        <div className="detail-item">
          <span>Date: </span>
          <span className="dates" data-testid="dates">
            {dates}
          </span>
        </div>
        <div className="detail-item">
          <span>Register open:</span>
          <span className="register-times" data-testid="register-times">
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
