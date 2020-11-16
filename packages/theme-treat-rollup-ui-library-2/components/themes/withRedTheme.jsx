import ThemeProvider from "./ThemeProvider";
import redTheme from "./red-theme.treat";

const withRedTheme = (Component) => (
  <ThemeProvider value={redTheme}>
    <Component />
  </ThemeProvider>
);

export default withRedTheme;