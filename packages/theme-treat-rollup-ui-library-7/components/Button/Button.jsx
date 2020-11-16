import React from "react";
import { useStyles } from "../treat-resolver";
import * as styleRefs from "./Button.treat";

export default ({ children }) => {
  let styles;
  // if (useTheme()) {
    styles = useStyles(styleRefs);
  // } else {
    // styles = { button: styleRefs.buttonDefault };
  // }
  return <button className={styles.button}>{children}</button>;
};
