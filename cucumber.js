// ./cucumber.js
//
// Config file for cucumber-js.
//   Note: cucumber is written in commonjs,
//   this will NOT work if changed to cucumber.config.json.
let common = [
  // Specify feature files dir.
  'features/**/*.feature',

  // Load: ts modules, step defs, and formatters.
  '--require-module ts-node/register',
  '--require step-definitions/**/*.steps.ts',
  '--format progress-bar',
  '--format @cucumber/pretty-formatter',
].join(' ');

// Export common config as default.
module.exports = {
  default: common,
};
