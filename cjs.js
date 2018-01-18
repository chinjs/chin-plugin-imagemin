'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imagemin = require('imagemin');

var _imagemin2 = _interopRequireDefault(_imagemin);

var _imageminJpegtran = require('imagemin-jpegtran');

var _imageminJpegtran2 = _interopRequireDefault(_imageminJpegtran);

var _imageminPngquant = require('imagemin-pngquant');

var _imageminPngquant2 = _interopRequireDefault(_imageminPngquant);

var _imageminSvgo = require('imagemin-svgo');

var _imageminSvgo2 = _interopRequireDefault(_imageminSvgo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (options = {}) => ({

  OptimizeJpg: () => data => _imagemin2.default.buffer(data, {
    plugins: [(0, _imageminJpegtran2.default)(options.OptimizeJpg || {
      progressive: true
      // arithmetic: true
    })]
  }),

  OptimizePng: () => data => _imagemin2.default.buffer(data, {
    plugins: [(0, _imageminPngquant2.default)(options.OptimizePng || {
      /**
      floyd: :number | :boolean,
      nofs: :boolean,
      posterize: :string,
      quality: :string,
      speed: :number,
      verbose: true
      */
    })]
  }),

  OptimizeSvg: () => data => _imagemin2.default.buffer(data, {
    plugins: [(0, _imageminSvgo2.default)(options.OptimizeSvg || {
      js2svg: { pretty: true },
      full: true,
      plugins: svgoPlugins
    })]
  })
});

const svgoPlugins = ['removeDoctype', 'removeXMLProcInst', 'removeComments', 'removeMetadata', 'removeXMLNS', 'removeEditorsNSData', 'cleanupAttrs', 'minifyStyles',
// "convertStyleToAttrs",
'cleanupIDs', 'removeRasterImages', 'removeUselessDefs', 'cleanupNumericValues', 'cleanupListOfValues', 'convertColors', 'removeUnknownsAndDefaults', 'removeNonInheritableGroupAttrs', 'removeUselessStrokeAndFill', 'removeViewBox', 'cleanupEnableBackground', 'removeHiddenElems', 'removeEmptyText', 'convertShapeToPath', 'moveElemsAttrsToGroup', 'moveGroupAttrsToElems', 'collapseGroups', 'convertPathData', 'convertTransform', 'removeEmptyAttrs', 'removeEmptyContainers', 'mergePaths', 'removeUnusedNS', 'sortAttrs', 'removeTitle', 'removeDesc', 'removeDimensions', 'removeAttrs', 'removeElementsByAttr', 'addClassesToSVGElement', 'removeStyleElement', 'addAttributesToSVGElement'];
