import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import LabelledInput from "./LabelledInput";

let state = {
  word: "Roar",
};

let onChange = jest.fn((e) => {
  state = {
    [e.target.id]: e.target.value,
  };
});

test("Should start empty", () => {
  render(<LabelledInput type="text" labelText="Word" />);
  expect(screen.getByText("Word")).toBeInTheDocument();
  expect(screen.getByTestId("input").value).toBe("");
});

test("should display an existing value", () => {
  render(
    <LabelledInput
      type="text"
      labelText="Word"
      value={state.word}
      onChange={onChange}
    />
  );
  expect(screen.getByTestId("input").value).toEqual(state.word);
  expect(screen.getByText("Word").classList).toContain("filled");
});
