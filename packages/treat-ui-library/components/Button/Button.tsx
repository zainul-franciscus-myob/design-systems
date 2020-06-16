import React, { ReactNode } from "react";
import { button } from "./Button.treat";

export interface ButtonProps {
  children?: ReactNode;
}

export default ({ children }: ButtonProps) => (
  <button className={button}>{children}</button>
);
