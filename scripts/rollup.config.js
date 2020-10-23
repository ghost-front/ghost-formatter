const aliasPlugin = require('rollup-plugin-alias')
const eslintPlugin = require('rollup-plugin-eslint')
const resolvePlugin = require('rollup-plugin-node-resolve')
const commonjsPlugin = require('rollup-plugin-commonjs')
const babelPlugin = require('rollup-plugin-babel')
const replacePlugin = require('rollup-plugin-replace')
const filesize = require('rollup-plugin-filesize')
const uglifyPlugin = require('rollup-plugin-uglify').uglify

const NODE_ENV = process.env.NODE_ENV || 'development'

const _config = (config = {}) => {
  const {
    eslint,
    alias = {},
    replace = {},
    commonjs = {},
    uglify = {}
  } = config

  let plugins = [
    aliasPlugin({
      resolve: ['.js'],
      ...alias
    }),
    replacePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      NODE_ENV: JSON.stringify(NODE_ENV),
      ...replace
    }),
    resolvePlugin(),
    commonjsPlugin({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**',
      ...commonjs
    })
  ]

  if (eslint) {
    plugins.push(eslintPlugin(eslint))
  }
  plugins.push(
    babelPlugin({
      runtimeHelpers: true,
      exclude: 'node_modules/**' // only transpile our source code
    })
  )

  plugins = plugins.concat([uglifyPlugin(uglify), filesize()])

  return {
    plugins
  }
}

module.exports = _config
