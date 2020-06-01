import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";

import Button from "./Button";

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

test("Should display", () => {
  act(() => {
    render(<Button text="Roar" />, container);
  });
  const button = document.querySelector("[data-testid=button]");
  expect(button.innerHTML).toBe("Roar");
});

test("Should click", () => {
  let onClick = jest.fn();

  act(() => {
    render(<Button text="Roar" onButtonClick={onClick} />, container);
  });
  const button = document.querySelector("[data-testid=button]");
  for (let i = 0; i < 3; i++) {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  }
  expect(onClick).toHaveBeenCalledTimes(3);
});

test("Should prevent double submission", () => {
  let rerender = null;

  let disabled = false;
  let apiCall = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  let onClick = jest.fn(() => {
    disabled = true;
    rerender(
      <Button text="Roar" onButtonClick={onClick} disabled={disabled} />,
      container
    );
    apiCall().then(() => {
      disabled = false;
      rerender(
        <Button text="Roar" onButtonClick={onClick} disabled={disabled} />,
        container
      );
    });
  });

  act(() => {
    let a = render(
      <Button text="Roar" onButtonClick={onClick} disabled={disabled} />,
      container
    );
    rerender = a.rerender;
  });
  let button = document.querySelector("[data-testid=button]");
  expect(button.disabled).toBeFalsy();

  for (let i = 0; i < 3; i++) {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  }
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(button.disabled).toBeTruthy();
  setTimeout(() => {
    expect(button.disabled).toBeFalsy();
  }, 5000);
});
