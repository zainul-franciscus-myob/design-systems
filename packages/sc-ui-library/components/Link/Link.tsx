import React, { ReactNode } from "react";
import styled from "styled-components";

export interface LinkProps {
  children?: ReactNode;
  href?: string;
}

const StyledA = styled.a`
  background-color: blueÎ;
`;
export default ({ children, href }: LinkProps) => (
  <StyledA href={href}>{children}</StyledA>
);
