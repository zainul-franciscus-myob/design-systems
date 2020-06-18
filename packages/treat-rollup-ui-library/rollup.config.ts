import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { rollupPluginTreat } from 'rollup-plugin-treat';
import autoExternal from 'rollup-plugin-auto-external';
import pkg from "./package.json";

export default {
  input: "components/index.ts",
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
    resolve(),
    rollupPluginTreat({ outputCSS: "main.css" }),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      objectHashIgnoreUnknownHack: true,
    }),
  ],
};
