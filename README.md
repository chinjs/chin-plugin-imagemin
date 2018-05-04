# chin-plugin-imagemin

[![npm](https://img.shields.io/npm/v/chin-plugin-imagemin.svg?style=flat-square)](https://www.npmjs.com/package/chin-plugin-imagemin)
[![npm](https://img.shields.io/npm/dm/chin-plugin-imagemin.svg?style=flat-square)](https://www.npmjs.com/package/chin-plugin-imagemin)
[![Build Status](https://img.shields.io/travis/kthjm/chin-plugin-imagemin.svg?style=flat-square)](https://travis-ci.org/kthjm/chin-plugin-imagemin)
[![Coverage Status](https://img.shields.io/codecov/c/github/kthjm/chin-plugin-imagemin.svg?style=flat-square)](https://codecov.io/github/kthjm/chin-plugin-imagemin)

[chin](https://github.com/kthjm/chin) plugin using [imagemin](https://github.com/imagemin/imagemin) (designed by refer to [`gulp-imagemin`](https://github.com/sindresorhus/gulp-imagemin) including default optimizers).

## Installation
```shell
yarn add -D chin chin-plugin-imagemin
```

## Usage

### imagemin([options | plugins])

```js
import imagemin from 'chin-plugin-imagemin'

// arg as empty that use default optimizers
const ext = imagemin()

// arg as options for default optimizers
const ext = imagemin({
  gifsicle: {},
  jpegtran: {},
  optipng: {},
  svgo: {}
})

// arg as custom plugins
const ext = imagemin([])

// arg as custom options
const ext = imagemin({ plugins: [] })
```

#### default optimizers
- [`gifsicle`](https://github.com/imagemin/imagemin-gifsicle)
- [`jpegtran`](https://github.com/imagemin/imagemin-jpegtran)
- [`optipng`](https://github.com/imagemin/imagemin-optipng)
- [`svgo`](https://github.com/imagemin/imagemin-svgo)

## License
MIT (http://opensource.org/licenses/MIT)
