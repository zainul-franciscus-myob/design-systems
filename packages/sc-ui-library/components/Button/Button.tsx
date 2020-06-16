import React, { ReactNode } from "react";
import styled from "styled-components";

export interface ButtonProps {
  children?: ReactNode;
}

const StyledButton = styled.button`
  background-color: red;
`;

export default ({ children }: ButtonProps) => (
  <StyledButton>{children}</StyledButton>
);
