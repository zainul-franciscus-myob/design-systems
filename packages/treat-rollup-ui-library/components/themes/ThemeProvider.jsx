import React, { ReactNode } from "react";
import { TreatProvider } from "react-treat";
import { ThemeRef } from "treat";
import { greenTheme, redTheme } from "./theme.treat";

export default ({ children, theme }) => {
  switch (theme) {
    case greenTheme:
      return <Green>{children}</Green>;
    case redTheme:
    default:
      return <Red>{children}</Red>;
  }
};
const Green = ({ children }) => {
  return <TreatProvider theme={greenTheme}>{children}</TreatProvider>;
};
const Red = ({ children }) => {
  return <TreatProvider theme={redTheme}>{children}</TreatProvider>;
};
