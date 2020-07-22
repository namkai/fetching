import React from "react";
import styled from "styled-components";
import Container from "./Container";

const StyledContainer = styled(Container)`
  border: 1px solid grey;
  justify-content: center;
`;

const Cell: React.FC = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Cell;
