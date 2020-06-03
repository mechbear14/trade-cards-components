import React from "react";
import {
  faCheckCircle,
  faQuestionCircle,
  faExclamationCircle,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import IconOption from "../../input/IconOption/IconOption";

import "./ConnectionJudge.css";

/**
 * Props:
 * connection: The connection to judge, with id and both cards
 * onChange: Function that fires when selection changes
 */

export default function ConnectionJudge(props) {
  return (
    <div className="connection-judge">
      <div className="connection">Should be something</div>
      <div className="option-box">
        <IconOption
          icon={faCheckCircle}
          selectName={props.connection.id}
          optionName="approve"
          optionLabel="Approve"
          onChange={props.onChange}
        />
        <IconOption
          icon={faQuestionCircle}
          selectName={props.connection.id}
          optionName="needsCheck"
          optionLabel="Needs verification"
          onChange={props.onChange}
        />
        <IconOption
          icon={faExclamationCircle}
          selectName={props.connection.id}
          optionName="inappropriate"
          optionLabel="Inappropriate response"
          onChange={props.onChange}
        />
        <IconOption
          icon={faArrowAltCircleRight}
          selectName={props.connection.id}
          optionName="merge"
          optionLabel="Merge connection"
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
