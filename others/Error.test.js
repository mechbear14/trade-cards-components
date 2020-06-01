import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "@testing-library/react";
import { render } from "@testing-library/react";

import Error from "./Error";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("should render with a message", () => {
  let error = { message: "Roar! You've found me!" };
  act(() => {
    render(<Error error={error} />);
  });
  let errorBox = document.querySelector(".error");
  expect(errorBox.textContent).toEqual(error.message);
});

test("should render a list of errors", () => {
  let errors = [
    { message: "Email cannot be blank" },
    { message: "Password cannot be blank" },
  ];
  act(() => {
    render(<Error error={errors} />);
  });
  let errorList = document.querySelector(".error ul");
  let errorMessages = document.querySelectorAll(".error ul li");
  expect(errorList).not.toBeNull();
  expect(errorMessages[0].textContent).toEqual(errors[0].message);
  expect(errorMessages[1].textContent).toEqual(errors[1].message);
});

test("should render error with detail", () => {
  let error = {
    message: "INTERNAL",
    details: "Cannot read property undefined of undefined",
  };
  act(() => {
    render(<Error error={error} />);
  });
  let errorMessage = document.querySelector(".error h3");
  let errorDetail = document.querySelectorAll(".error p");
  expect(errorMessage).not.toBeNull();
  expect(errorMessage.textContent).toEqual(error.message);
  expect(errorDetail).not.toBeNull();
  expect(errorDetail.textContent).toEqual(error.details);
});
