import React, { ReactNode } from "react";
import { TreatProvider } from "react-treat";
import { ThemeRef } from "treat";
import { greenTheme, redTheme } from "./theme.treat";
export interface ThemeProps {
  children?: ReactNode;
  theme: ThemeRef;
}
export default ({ children, theme }: ThemeProps) => {
  switch (theme) {
    case greenTheme:
      return <Green>{children}</Green>;
    case redTheme:
    default:
      return <Red>{children}</Red>;
  }
};
interface SmallThemeProps {
  children?: ReactNode;
}
const Green = ({ children }: SmallThemeProps) => {
  return <TreatProvider theme={greenTheme}>{children}</TreatProvider>;
};
const Red = ({ children }: SmallThemeProps) => {
  return <TreatProvider theme={redTheme}>{children}</TreatProvider>;
};
