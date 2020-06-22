import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import autoExternal from 'rollup-plugin-auto-external';
import pkg from "./package.json";
const path = require("path");
const extensions = [".js", ".jsx"];

export default {
  input: "components/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [
    autoExternal(),
    resolve({ extensions }),
    commonjs(),
    babel({
      babelHelpers: "runtime",
      exclude: ["node_modules/**"],
      skipPreflightCheck: true,
      // extensions,
    }),
  ],
};
// can be made an array for multi entrypoints
