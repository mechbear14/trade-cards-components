import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./Button";

test("Should display", () => {
  render(<Button text="Roar" />);
  expect(screen.getByText("Roar")).toBeInTheDocument();
});

test("Should click", () => {
  let onClick = jest.fn();
  render(<Button text="Roar" onButtonClick={onClick} />);
  for (let i = 0; i < 3; i++) {
    fireEvent.click(screen.getByText("Roar"));
  }
  expect(onClick).toHaveBeenCalledTimes(3);
});

test.skip("Should prevent double submission", () => {
  let disabled = false;
  let apiCall = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  let onClick = jest.fn(() => {
    disabled = true;
    apiCall().then(() => {
      disabled = false;
    });
  });

  render(<Button text="Roar" onButtonClick={onClick} disabled={disabled} />);
  let button = screen.getByText("Roar");
  expect(button).not.toBeDisabled();
  for (let i = 0; i < 3; i++) {
    fireEvent.click(button);
  }
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(button).toBeDisabled();
  setTimeout(() => {
    expect(button).not.toBeDisabled();
  }, 5000);
});
