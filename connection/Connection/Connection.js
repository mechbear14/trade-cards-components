import React from "react";

import "./Connection.css";

import Card from "../../card/Card/Card";

export default function Connection(props) {
  return (
    <div className="connection">
      <Card kind={props.card1.kind} text={props.card1.text} />
      <Card kind={props.card2.kind} text={props.card2.text} />
    </div>
  );
}
