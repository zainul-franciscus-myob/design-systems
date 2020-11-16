import React from "react";
import { useStyles } from "../treat-resolver";

export default ({ children, theme }) => (
  <TreatProvider theme={theme}>{children}</TreatProvider>
);