import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Row from "./Row";
import Cell from "./Cell";
import Container from "./Container";

const StyledContainer = styled(Container)`
  flex-direction: column;
`;

const TitleCell = styled(Cell)`
  font-size: 1.5rem;
  text-transform: capitalize;
  cursor: pointer;
`;

interface Mapable {
  [key: string]: any;
}

interface TableProps<T> {
  data: T[];
  keys: Array<keyof T>;
}

enum Direction {
  Ascending = "asc",
  Descending = "desc",
}

export default function Table<T extends Mapable>({
  data,
  keys,
}: TableProps<T>) {
  const [direction, setDirection] = useState(Direction.Ascending);
  const [selectedKey, setSelectedKey] = useState<keyof T | null>(null);

  const isAscendingOrder = useMemo(() => direction === Direction.Ascending, [
    direction,
  ]);

  const handleHeaderClick = (clickedKey: keyof T) => {
    if (clickedKey === selectedKey) {
      setDirection(
        direction === Direction.Ascending
          ? Direction.Descending
          : Direction.Ascending
      );
    } else {
      setSelectedKey(clickedKey);
    }
  };

  const formattedData = useMemo(
    () =>
      selectedKey
        ? data.sort((a, b) => {
            if (isAscendingOrder) {
              return a[selectedKey!] > b[selectedKey!] ? 1 : -1;
            }

            return a[selectedKey!] < b[selectedKey!] ? 1 : -1;
          })
        : data,
    [data, isAscendingOrder, selectedKey]
  );

  return (
    <StyledContainer>
      <Row>
        {keys.map((key) => (
          <TitleCell key={String(key)} onClick={() => handleHeaderClick(key)}>
            {key}
          </TitleCell>
        ))}
      </Row>
      {formattedData.map((data: T) => (
        <Row data-testid="row" key={data.id}>
          {keys.map((key) => (
            <Cell key={String(key)}>
              {typeof data[key] === "object"
                ? Object.keys(data[key]).length
                : data[key]}
            </Cell>
          ))}
        </Row>
      ))}
    </StyledContainer>
  );
}
