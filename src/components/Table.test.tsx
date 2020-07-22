import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Breed } from "../models";
import Table from "./Table";

const data: Partial<Breed>[] = [
  { id: 231, name: "Dog", life_span: "10 - 12" },
  { id: 123, name: "Other Dog", life_span: "6 - 30" },
];
const keys: Array<keyof Breed> = ["id", "name", "life_span"];

describe("Table", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<Table keys={keys} data={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should return a header with the specified columns", () => {
    const { getByText } = render(<Table keys={keys} data={[]} />);

    keys.forEach((key) => {
      expect(getByText(key)).toBeInTheDocument();
    });
  });

  it("should render a list of rows of the given data", () => {
    const { getByText } = render(<Table keys={keys} data={data} />);

    data.forEach((breed) => {
      Object.keys(breed).forEach((key) => {
        expect(getByText(String(breed[key]))).toBeInTheDocument();
      });
    });
  });

  it("should sort the list of items by the specified key", () => {
    const { getByText, queryAllByTestId } = render(
      <Table keys={keys} data={data} />
    );

    const idHeader = getByText("id");

    fireEvent.click(idHeader);

    const rows = queryAllByTestId("row");
    expect(rows[0].innerHTML.includes("123")).toEqual(true);
  });

  it("should sort the list of items by the in a descending direction", () => {
    const { getByText, queryAllByTestId } = render(
      <Table keys={keys} data={data} />
    );

    const idHeader = getByText("id");

    fireEvent.click(idHeader);
    fireEvent.click(idHeader);

    const rows = queryAllByTestId("row");
    expect(rows[0].innerHTML.includes("231")).toEqual(true);
  });
});
