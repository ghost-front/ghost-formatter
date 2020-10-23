const baseConfig = require('./scripts/rollup.config')

module.exports = [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/ghost-formatter.js',
        format: 'umd',
        name: 'ghost-formatter'
      }
    ],
    external: [],
    ...baseConfig({
      commonjs: {
        include: 'dist/**'
      }
    })
  }
]
