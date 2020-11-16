const presetEnv = require("@babel/preset-env");
const presetReact = require("@babel/preset-react");
const classProperties = require("@babel/plugin-proposal-class-properties");
const runtime = require("@babel/plugin-transform-runtime");

module.exports = {
  presets: [
    [
      presetEnv,
      {
        modules: false,
        shippedProposals: true,
      },
    ],
    [presetReact],
  ],
  plugins: [
    [classProperties],
    [runtime],
  ],
};
