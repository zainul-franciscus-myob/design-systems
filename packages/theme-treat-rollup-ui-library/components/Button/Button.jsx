import React from "react";
//import { useStyles } from "react-treat";
import * as styleRefs from "./Button.treat";

export default ({ children }) => {
  let styles;
  // if (useTheme()) {
    //styleRefsstyles = useStyles(styleRefs);
  // } else {
    // styles = { button: styleRefs.buttonDefault };
  // }
  return <button className={styleRefs.button}>{children}</button>;
};
