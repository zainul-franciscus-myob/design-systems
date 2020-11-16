
import withFeelixTheme from "./withFeelixTheme";
import {Button as ButtonComponent, Link as LinkComponent} from "core-widgets/components"
export { feelixTheme } from "./feelix-theme.treat";

export const Button = withFeelixTheme(ButtonComponent);
export const Link = withFeelixTheme(LinkComponent);
