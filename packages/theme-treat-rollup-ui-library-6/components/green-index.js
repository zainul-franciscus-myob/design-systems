import greenTheme from "./themes/green-theme.treat";

import withGreenTheme from "./themes/withGreenTheme";
import ButtonComponent from "./Button/Button"
import LinkComponent from "./Link/Link"

export const Button = withGreenTheme(ButtonComponent);
export const Link = withGreenTheme(LinkComponent);
