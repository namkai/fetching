import React from "react";
import Container from "./Container";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  & > div {
    width: ${({ children }) => 100 / React.Children.toArray(children).length}%;
  }
`;

const Row: React.FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Row;
