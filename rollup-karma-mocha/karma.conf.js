module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    autoWatch: true,
    files: [
      { pattern: 'src/**/*.js', included: false },
      'test/**/*.spec.js'
    ],
    preprocessors: {
      'src/**/*.js': ['rollup'],
      'test/**/*.spec.js': ['rollup']
    },
    rollupPreprocessor: {
      plugins: [
        require('rollup-plugin-babel')()
      ],
      format: 'iife',
      moduleName: 'test',
      sourceMap: 'inline'
    },
    reporters: ['mocha'],
    browsers: ['PhantomJS']
  })
}
