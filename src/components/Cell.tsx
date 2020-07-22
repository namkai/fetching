import React from "react";
import styled from "styled-components";
import Container from "./Container";

const StyledContainer = styled(Container)`
  border: 1px solid grey;
  justify-content: left;
  padding: 0.2rem;
`;

interface CellProps {
  key: string;
  handleOnClick?(): void;
}

const Cell: React.FC<CellProps> = ({
  children,
  handleOnClick,
  ...restOfProps
}) => (
  <StyledContainer {...restOfProps} onClick={handleOnClick}>
    {children}
  </StyledContainer>
);

export default Cell;
