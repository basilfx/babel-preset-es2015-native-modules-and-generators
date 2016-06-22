# babel-preset-es2015-native-modules-and-generators

> Babel preset for all es2015 plugins MINUS TWO:

* babel-plugin-transform-es2015-modules-commonjs
* babel-plugin-transform-regenerator

## Use cases

- Webpack 2 has support for [Tree Shaking](http://www.2ality.com/2015/12/webpack-tree-shaking.html), which doesn't work with the `es2015` preset because of the `transform-es2015-modules-commonjs` plugin.
- Modern browsers have [support for generators](http://kangax.github.io/compat-table/es6/#test-generators). However, the `es2015` preset transforms generataros (and/or async) to ES5 compatible code. It is harder to debug and more verbose in lines of code. Removing `babel-plugin-transform-regenerator` defaults to native generators.

## Install

```sh
$ npm install --save-dev babel-preset-es2015-native-modules-and-generators
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2015-native-modules-and-generators"]
}
```

### Via CLI

```sh
$ babel script.js --presets es2015-native-modules-and-generators
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["es2015-native-modules-and-generators"]
});
```
