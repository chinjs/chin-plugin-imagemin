const imagemin = require('imagemin')

const { isArray } = Array

const defaultNames = ['gifsicle', 'jpegtran', 'optipng', 'svgo']

const loadPlugin = (name, ...args) => {
  try {
    return require(`imagemin-${name}`)(...args)
  } catch(err) {
    return console.log(`chin-plugin-imagemin: Couldn't load default plugin "${name}"`)
  }
}

const o2o = (opts = {}) =>
  isArray(opts) ? { plugins: opts } :
  (isArray(opts.plugins) || isArray(opts.use)) ? opts :
  { plugins: defaultNames.map(name => loadPlugin(name, opts[name])).filter(plugin => plugin) }

module.exports = (opts) => {
  const options = o2o(opts)
  const processor = (data) => imagemin.buffer(data, options)
  return { processor }
}