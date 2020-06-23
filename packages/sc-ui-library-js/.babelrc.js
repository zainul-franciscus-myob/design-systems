const presetEnv = require("@babel/preset-env");
const presetReact = require("@babel/preset-react");
const classProperties = require("@babel/plugin-proposal-class-properties");
// const exportDefaultFrom = require("@babel/plugin-proposal-export-default-from");
// const exportNamespaceFrom = require("@babel/plugin-proposal-export-namespace-from");
const runtime = require("@babel/plugin-transform-runtime");
const styledComponents = require("babel-plugin-styled-components");
const rmPropTypes = require("babel-plugin-transform-react-remove-prop-types");
const addExports = require("babel-plugin-add-module-exports");

module.exports = {
  presets: [
    [
      presetEnv,
      {
        modules: false,
        shippedProposals: true,
        include: ["proposal-object-rest-spread"],
      },
    ],
    [presetReact, { development: false }],
  ],
  plugins: [
    [classProperties, { "loose": false }],
    [styledComponents, {
      "pure": true,
      "ssr": false,
      "displayName": false,
    }],
    [runtime],

    // addExports,
    // exportDefaultFrom,
    // exportNamespaceFrom,
    // [
    //   rmPropTypes,
    //   {
    //     removeImport: true,
    //     additionalLibraries: ["prop-types-extra"],
    //   },
    // ],
  ],
};
