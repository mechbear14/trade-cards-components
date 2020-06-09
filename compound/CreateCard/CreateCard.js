import React, { useState } from "react";

import "./CreateCard.css";

import ErrorBox from "../../decorations/ErrorBox/ErrorBox";
import Choice from "../../input/Choice/Choice";
import CardInput from "../../input/CardInput/CardInput";

// TODO: Make this component completely controlled. Make onSelect, onChange props

export default function CreateCard(props) {
  const [kind, setKind] = useState("blue");
  const [text, setText] = useState("");

  let cardKinds = [
    { name: "blue", text: "Blue" },
    { name: "white", text: "White" },
    { name: "red", text: "Red" },
  ];

  let onSelect = (e) => {
    if (e.target.checked) setKind(e.target.id);
  };

  let onChange = (e) => {
    let textContent = e.target.textContent;
    if (textContent.length > 30) {
      e.target.textContent = text;
    } else {
      setText(e.target.textContent);
    }
  };

  let newCard = { kind, text };

  return (
    <div className="create-card">
      {props.error && <ErrorBox error={props.error} />}
      <Choice choices={cardKinds} onSelect={onSelect} name="newCardKind" />
      <div className="blank"></div>
      <CardInput card={newCard} onChange={onChange} />
    </div>
  );
}
