import { createTheme } from 'treat';

const createThemeByType = (style,type) =>  process.env.type && process.env.type === type ? createTheme(style) : !process.env.type && createTheme(style);

export default createThemeByType;
