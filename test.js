import assert from 'assert'
import rewire from 'rewire'

it('loadPlugin.catch(err) => just logging', () =>
  rewire('.').__get__('loadPlugin')('invalidName')
)

describe('o2o', () => {
  const o2o = rewire('.').__get__('o2o')
  const plugins = []

  it('imagemin(plugins)', () => assert.deepEqual(o2o(plugins), { plugins }))

  it('imagemin({ plugins })', () => assert.deepEqual(o2o({ plugins }), { plugins }))

  it('imagemin()', () => assert.equal(o2o().plugins.length, 4))

  it('imagemin({ [name] })', () =>
    assert.equal(
      o2o({
        gifsicle: {
          interlaced: true,
          optimizationLevel: 2,
          colors: 200
        },
        jpegtran: {
          progressive: true,
          arithmetic: true
        },
        optipng: {
          optimizationLevel: 4,
          bitDepthReduction: false,
          colorTypeReduction: false,
          paletteReduction: false
        },
        svgo: {
          full: true,
          floatPrecision: 3,
          dataurl: 'unenc',
          plugins: [],
          js2svg: {
            pretty: true,
            indent: '  '
          }
        }
      })
      .plugins
      .length,
      4
    )
  )

})

describe('imagemin', () => {
  const imagemin = rewire('.')
  const { promisify } = require('util')
  const readFile = promisify(require('fs').readFile)
  const { resolve } = require('path')

  const test = (filename, opts) => () =>
    readFile(resolve(`./images/${filename}`)).then(buffer =>
      imagemin(opts)
      .processor(buffer)
      .then(processed =>
        assert.ok(processed.length < buffer.length)
      )
    )

  it('gif', test('gif.gif', { gifsicle: {} }))
  it('jpg', test('jpg.jpg', { jpegtran: { arithmetic: true } }))
  it('png', test('png.png', { optipng: {} }))
  it('svg', test('svg.svg', { svgo: {} }))
})