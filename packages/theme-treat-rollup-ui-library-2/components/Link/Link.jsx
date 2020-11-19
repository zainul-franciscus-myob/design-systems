import React from "react";
import { link } from "./Link.treat";

export default ({ children, href }) => (
  <a className={''} href={href}>
    Im a LINK
    {children}
  </a>
);


export const GreenButton = withGreenTheme(Button);
export const RedButton = withRedTheme(Button);