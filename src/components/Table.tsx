import React, { useState } from "react";
import styled from "styled-components";
import Row from "./Row";
import Cell from "./Cell";
import Container from "./Container";

const StyledContainer = styled(Container)`
  flex-direction: column;
`;

interface TableProps<T> {
  data: T[];
}

enum Direction {
  Ascending = "asc",
  Descending = "desc",
}

export default function Table<T>({ data }: TableProps<T>) {
  const [direction, setDirection] = useState(Direction.Ascending);

  const titles = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <StyledContainer>
      <Row>
        {titles.map((title) => (
          <Cell>{title}</Cell>
        ))}
      </Row>
      {data.map((data: T) => (
        <Row></Row>
      ))}
    </StyledContainer>
  );
}
