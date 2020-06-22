import React from "react";
import styled from "styled-components";

const StyledA = styled.a`
  background-color: blue;
`;
export default ({ children, href }) => (
  <StyledA href={href}>{children}</StyledA>
);
