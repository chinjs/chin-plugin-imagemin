# chin-plugins-imagemin

## Usage
```js
require('babel-register')
module.exports = Object.assign({},
  require('chin-plugins-imagemin')({
    jpg: {},
    png: {},
    svg: {}
  })
)
```

## PluginName

- `OptimizeJpg`
- `OptimizePng`
- `OptimizeSvg`