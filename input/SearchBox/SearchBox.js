import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./SearchBox.css";

/**
 * @param {propName} props variable name in an external state to set
 * @param {value} props current value in the search box
 * @param {onChange} props function that fires when the search content changes
 */

export default function SearchBox(props) {
  const [barClass, setBarClass] = useState("top-bar");
  let onFocus = () => {
    setBarClass("top-bar typing");
  };
  let onBlur = () => {
    setBarClass("top-bar");
  };
  return (
    <div className="search-box">
      <input
        type="text"
        id={props.propName}
        value={props.value}
        onChange={props.onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        data-testid="input"
      />
      <div className="bottom-bar"></div>
      <div className={barClass} data-testid="bar"></div>
      <div className="search-button">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}
