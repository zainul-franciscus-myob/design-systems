import React, { ReactNode } from "react";
import { link } from "./Link.treat";

export interface LinkProps {
  children?: ReactNode;
  href?: string;
}

export default ({ children, href }: LinkProps) => (
  <a className={link} href={href}>
    {children}
  </a>
);
