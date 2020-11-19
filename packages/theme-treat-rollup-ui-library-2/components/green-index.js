export {greenTheme} from "./themes/green-theme.treat";
export {default as ThemeProvider} from './themes/ThemeProvider'

import withGreenTheme from "./themes/withGreenTheme";
import ButtonComponent from "./Button/Button"
import LinkComponent from "./Link/Link"

export const Button = /*#__PURE__*/withGreenTheme(ButtonComponent);
export const Link = /*#__PURE__*/withGreenTheme(LinkComponent);
