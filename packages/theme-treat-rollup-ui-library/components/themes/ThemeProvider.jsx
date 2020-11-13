import React, { ReactNode } from "react";
import { TreatProvider } from "react-treat";

export default ({ children, theme }) => (
  <TreatProvider theme={theme}>{children}</TreatProvider>
);