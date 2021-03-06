const gulp = require('gulp')
const svgstore = require('gulp-svgstore')
const rename = require('gulp-rename')

module.exports = function svgSprite() {
  return gulp.src('src/assets/img/sprite/*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('html/assets/img'))
}

