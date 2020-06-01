import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "@testing-library/react";
import { render } from "@testing-library/react";

import Display from "./Display";

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

test("should render with season title, description and number", () => {
  let season = {
    label: "201",
    title: "The First Season",
    description: "All cards are random",
  };
  act(() => {
    render(<Display season={season} />);
  });
  let labelBox = document.querySelector(".display .label");
  let titleBox = document.querySelector(".display .title");
  let descBox = document.querySelector(".display .desc");
  expect(labelBox).not.toBeNull();
  expect(labelBox.textContent).toEqual(season.label);
  expect(titleBox).not.toBeNull();
  expect(titleBox.textContent).toEqual(season.title);
  expect(descBox).not.toBeNull();
  expect(descBox.textContent).toEqual(season.description);
});

test("should render with season title and number only", () => {
  let season = {
    label: "201",
    title: "The First Season",
  };
  act(() => {
    render(<Display season={season} />);
  });
  let labelBox = document.querySelector(".display .label");
  let titleBox = document.querySelector(".display .title");
  let descBox = document.querySelector(".display .desc");
  expect(labelBox).not.toBeNull();
  expect(labelBox.textContent).toEqual(season.label);
  expect(titleBox).not.toBeNull();
  expect(titleBox.textContent).toEqual(season.title);
  expect(descBox).toBeNull();
});
