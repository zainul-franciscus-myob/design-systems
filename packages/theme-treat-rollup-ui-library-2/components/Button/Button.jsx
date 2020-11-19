import React from "react";
import { useStyles } from "react-treat";
import * as styleRefs from "./Button.treat";
import withGreenTheme from "../themes/withGreenTheme";
import withRedTheme from "../themes/withGreenTheme";

const Button= ({ children }) => {
  // debugger;

  let styles;
  // if (useTheme()) {
    styles = useStyles(styleRefs);
  // } else {
    // styles = { button: styleRefs.buttonDefault };
  // }
  return <button className={styles.button}>Im a BUTTON{children}</button>;
};

export const GreenButton = withGreenTheme(Button);
export const RedButton = withRedTheme(Button);

export default Button;