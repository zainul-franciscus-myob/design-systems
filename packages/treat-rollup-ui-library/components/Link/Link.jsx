import React, { ReactNode } from "react";
// import { link } from "./Link.treat";

export default ({ children, href }) => (
  <a className={''} href={href}>
    {children}
  </a>
);
