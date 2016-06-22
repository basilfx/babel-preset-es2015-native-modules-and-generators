var plugins = require("babel-preset-es2015").plugins;

var filter = [
  require("babel-plugin-transform-es2015-modules-commonjs"),
  require("babel-plugin-transform-regenerator")
];

module.exports = {
  plugins: plugins.filter(function(plugin) {
    return filter.indexOf([].concat(plugin)[0]) === -1;
  })
};
