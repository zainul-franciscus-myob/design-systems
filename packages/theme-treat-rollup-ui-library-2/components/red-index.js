import redTheme from "./themes/red-theme.treat";
import withRedTheme from "./themes/withRedTheme";


import ButtonComponent from "./Button/Button"
import LinkComponent from "./Link/Link"

export const Button = withRedTheme(ButtonComponent);
export const Link = withRedTheme(LinkComponent);
