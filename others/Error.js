import React from "react";

export default function Error(props) {
  let manyErrors = props.error.hasOwnProperty("length");
  if (manyErrors) {
    return (
      <div className="error">
        <ul>
          {props.error.map((error, index) => (
            <li key={index}>{error.message}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    if (props.error.hasOwnProperty("details")) {
      return (
        <div className="error">
          <div>
            <h3>{props.error.message}</h3>
            <p>{props.error.details}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="error">
          <p>{props.error.message}</p>
        </div>
      );
    }
  }
}
