import {ThemeProvider} from "core-widgets";
import feelixTheme from "./feelix-theme.treat";

const withFeelixTheme = (Component) => (
  <ThemeProvider value={feelixTheme}>
    <Component />
  </ThemeProvider>
);

export default withFeelixTheme;