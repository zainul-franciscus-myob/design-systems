import ThemeProvider from "./ThemeProvider";
import greenTheme from "./green-theme.treat";

const withGreenTheme = (Component) => (
  <ThemeProvider value={greenTheme}>
    <Component />
  </ThemeProvider>
);

export default withGreenTheme;