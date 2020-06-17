import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Choice from "./Choice";

const choices = [
  {
    name: "season",
    text: "Seasons",
  },
  {
    name: "cards",
    text: "Cards",
  },
  {
    name: "connections",
    text: "Connections",
  },
];

let currentPage = "season";

const onChange = (e) => {
  if (e.target.checked) {
    currentPage = e.target.value;
  }
};

test("should display options", () => {
  render(<Choice name="page" choices={choices} onSelect={onChange} />);
  for (let choice of choices) {
    expect(screen.getByLabelText(choice.text)).toBeInTheDocument();
  }
});

test("should call function when selected", () => {
  render(<Choice name="page" choices={choices} onSelect={onChange} />);
  fireEvent.click(screen.getByLabelText(choices[2].text));
  expect(currentPage).toEqual(choices[2].name);
});

test("should allow only one choice at once", () => {
  render(<Choice name="page" choices={choices} onSelect={onChange} />);
  fireEvent.click(screen.getByLabelText(choices[1].text));
  expect(screen.getByLabelText(choices[0].text)).not.toBeChecked();
  expect(screen.getByLabelText(choices[1].text)).toBeChecked();
  expect(screen.getByLabelText(choices[2].text)).not.toBeChecked();
  fireEvent.click(screen.getByLabelText(choices[2].text));
  expect(screen.getByLabelText(choices[0].text)).not.toBeChecked();
  expect(screen.getByLabelText(choices[1].text)).not.toBeChecked();
  expect(screen.getByLabelText(choices[2].text)).toBeChecked();
});
