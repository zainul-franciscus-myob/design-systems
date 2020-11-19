import React from "react";
import ThemeProvider from "./ThemeProvider";
import {redTheme} from "./red-theme.treat";

const withRedTheme = (Component) => (props) => {
  return (
    <ThemeProvider theme={redTheme}>
      <Component {...props} />
    </ThemeProvider>
  );
};

export default withRedTheme;
