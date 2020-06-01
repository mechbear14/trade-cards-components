import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "@testing-library/react";
import { render } from "@testing-library/react";

import { LabelledInput } from "./LabelledInput";

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

test("should render", () => {
  act(() => {
    render(<LabelledInput name="title" labelText="Title" value="Roar!" />);
  });
  let label = document.querySelector(".labelled-input label");
  let content = document.querySelector(".labelled-input input");
  let labelText = label.textContent;
  let contentText = content.textContent;
  expect(labelText).toEqual("Title");
  expect(contentText).toEqual("Roar!");
});

test("should run change function when changed", () => {
  let rerender = null;
  let state = Object.create;
  let onChange = jest.fn((e) => {
    state = {
      ...state,
      [e.target.id]: e.target.value,
    };
  });
  act(() => {
    rerender = render(
      <LabelledInput
        name="title"
        labelText="Title"
        value={state.title}
        onChange={onChange}
      />
    ).rerender;
  });
  const inputBox = document.querySelector(".labelled-input input");
  const message = "Roar! You've found me!";
  act(() => {
    for (let letter of message) {
      inputBox.dispatchEvent(new InputEvent("input", { data: letter }));
      rerender(
        <LabelledInput
          name="title"
          labelText="Title"
          value={state.title}
          onChange={onChange}
        />
      );
    }
  });
  expect(onChange).toHaveBeenCalledTimes(message.length);
  expect(inputBox.value).toEqual(message);
});

test("should change appearance when filled", () => {
  act(() => {
    render(
      <LabelledInput
        name="title"
        labelText="Title"
        value="Roar! You've found me!"
      />
    );
  });
  const inputLabel = document.querySelector(".labelled-input label");
  expect(inputLabel.classList).toContain("filled");
});

test("should change appearance when empty", () => {
  act(() => {
    render(<LabelledInput name="title" labelText="Title" value="" />);
  });
  const inputLabel = document.querySelector(".labelled-input label");
  expect(inputLabel.classList).toContain("empty");
});

test("should change appearance when typing", () => {
  act(() => {
    render(<LabelledInput name="title" labelText="Title" value="" />);
  });
  const inputBox = document.querySelector(".labelled-input input");
  const inputLabel = document.querySelector(".labelled-input label");
  const inputBar = document.querySelector(".labelled-input .top-bar");
  inputBox.focus();
  expect(inputBar.classList).toContain("typing");
  expect(inputLabel.classList).toContain("filled");
  inputBox.blur();
  expect(inputBar.classList).not.toContain("typing");
});
