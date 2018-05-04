import imagemin from './index.js'

const ext = imagemin()

export default {
  put: `images`,
  out: `.images`,
  clean: true,
  processors: {
    gif: ext,
    jpg: ext,
    png: ext,
    svg: ext
  }
}