import React from "react";
import Cell from "./Container";
import { render } from "@testing-library/react";

describe("Cell", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Cell>test</Cell>);
    const linkElement = getByText(test);
    expect(linkElement).toBeInTheDocument();
  });
});
