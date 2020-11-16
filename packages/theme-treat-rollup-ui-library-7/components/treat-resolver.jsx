import React, { createContext, useContext } from 'react';
import {
  resolveClassName,
  resolveStyles,
} from 'treat';
import { greenTheme } from './themes/green-theme.treat';

const DEFAULT_THEME = greenTheme

const TreatThemeContext = createContext(DEFAULT_THEME);

export const TreatProvider = ({ theme, children }) => (
  <TreatThemeContext.Provider value={theme}>
    {children}
  </TreatThemeContext.Provider>
);

export const useTheme = () => {
  return useContext(TreatThemeContext);
};

export const useStyles = (styles) =>
  resolveStyles(useTheme(), styles);

export const useClassName = (classRef) =>
  resolveClassName(useTheme(), classRef);