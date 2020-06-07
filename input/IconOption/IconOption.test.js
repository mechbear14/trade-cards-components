import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import IconOption from "./IconOption";

let onChange = jest.fn();

test("Should render", () => {
  render(
    <IconOption
      icon={faCheckCircle}
      selectName="1234"
      optionName="approve"
      optionLabel="Approve"
      onChange={onChange}
      testid="approve"
    />
  );
  expect(screen.queryByTestId("approve")).not.toBeNull();
  fireEvent.click(screen.queryByTestId("approve"));
  expect(onChange).toBeCalledTimes(1);
});

test.skip("Should show caption when hovered over", () => {
  render(
    <IconOption
      icon={faCheckCircle}
      selectName="1234"
      optionName="approve"
      optionLabel="Approve"
      onChange={onChange}
      testid="approve"
    />
  );
  expect(screen.getByText("Approve")).not.toBeVisible();
  fireEvent.mouseOver(screen.getByTestId("approve"));
  expect(screen.getByText("Approve")).toBeVisible();
  fireEvent.mouseLeave(screen.getByTestId("approve"));
  expect(screen.getByText("Approve")).not.toBeVisible();
});
