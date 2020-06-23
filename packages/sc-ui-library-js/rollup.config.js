import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";
const path = require("path");
const extensions = [".js", ".jsx"];
const peerDeps = Object.keys(pkg.peerDependencies)
const deps = Object.keys(pkg.dependencies)
const externals = [...peerDeps, ...deps];


export default {
  input: ["components/index"],
  output: [
    {
      dir: "lib/cjs",
      format: "cjs",
    },
    {
      // preserveModules: true,
      // file: pkg.module,
      // entryFileNames: '[name].js',
      dir: "lib/esm",
      format: "es",
    },
  ],
  external: id => externals.some(extPackage => id.includes(extPackage)),
  plugins: [
    commonjs(),
    resolve({ extensions, modulesOnly: true }),
    babel({
      babelHelpers: "runtime",
      exclude: ["node_modules/**"],
      // skipPreflightCheck: true,
      extensions,
    }),
  ],
};
// can be made an array for multi entrypoints
