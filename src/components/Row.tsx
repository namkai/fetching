import React from "react";
import Container from "./Container";
import styled from "styled-components";

const Row = styled(Container)`
  & > div {
    width: ${({ children }) => 100 / React.Children.toArray(children).length}%;
  }
`;

export default Row;
