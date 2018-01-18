import imagemin from 'imagemin'
import jpegtran from 'imagemin-jpegtran'
import pngquant from 'imagemin-pngquant'
import svgo from 'imagemin-svgo'

export default (options = {}) => ({

  OptimizeJpg: () => data =>
    imagemin.buffer(data, {
      plugins: [
        jpegtran(options.OptimizeJpg || {
          progressive: true
          // arithmetic: true
        })
      ]
    }),

  OptimizePng: () => data =>
    imagemin.buffer(data, {
      plugins: [
        pngquant(options.OptimizePng || {
          /**
          floyd: :number | :boolean,
          nofs: :boolean,
          posterize: :string,
          quality: :string,
          speed: :number,
          verbose: true
          */
        })
      ]
    }),

  OptimizeSvg: () => data =>
    imagemin.buffer(data, {
      plugins: [
        svgo(options.OptimizeSvg || {
          js2svg: { pretty: true },
          full: true,
          plugins: svgoPlugins
        })
      ]
    })
})

const svgoPlugins = [
  'removeDoctype',
  'removeXMLProcInst',
  'removeComments',
  'removeMetadata',
  'removeXMLNS',
  'removeEditorsNSData',
  'cleanupAttrs',
  'minifyStyles',
  // "convertStyleToAttrs",
  'cleanupIDs',
  'removeRasterImages',
  'removeUselessDefs',
  'cleanupNumericValues',
  'cleanupListOfValues',
  'convertColors',
  'removeUnknownsAndDefaults',
  'removeNonInheritableGroupAttrs',
  'removeUselessStrokeAndFill',
  'removeViewBox',
  'cleanupEnableBackground',
  'removeHiddenElems',
  'removeEmptyText',
  'convertShapeToPath',
  'moveElemsAttrsToGroup',
  'moveGroupAttrsToElems',
  'collapseGroups',
  'convertPathData',
  'convertTransform',
  'removeEmptyAttrs',
  'removeEmptyContainers',
  'mergePaths',
  'removeUnusedNS',
  'sortAttrs',
  'removeTitle',
  'removeDesc',
  'removeDimensions',
  'removeAttrs',
  'removeElementsByAttr',
  'addClassesToSVGElement',
  'removeStyleElement',
  'addAttributesToSVGElement'
]