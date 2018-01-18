# chin-plugins-imagemin

incomplete due to [#12](https://github.com/kthjm/chin/issues/12), [#16](https://github.com/kthjm/chin/issues/16)

## Usage
```js
require('babel-register')

module.exports = Object.assign({},
  require('chin-plugins-imagemin').default({
    OptimizeJpg: {},
    OptimizePng: {},
    OptimizeSvg: {}
  })
)
```

## Plugins

#### `"OptimizeJpg"`
options passed to [imagemin-jpegtran](https://github.com/imagemin/imagemin-jpegtran#options)

#### `"OptimizePng"`
options passed to [imagemin-pngquant](https://github.com/imagemin/imagemin-pngquant#options)

#### `"OptimizeSvg"`
options passed to [imagemin-svgo](https://github.com/svg/svgo#what-it-can-do)
