import React from "react";
import ThemeProvider from "./ThemeProvider";
import {greenTheme} from "./green-theme.treat";

const withGreenTheme = (Component) => (props) => {
  return (
    <ThemeProvider theme={greenTheme}>
      <Component {...props} />
    </ThemeProvider>
  );
};

export default withGreenTheme;
