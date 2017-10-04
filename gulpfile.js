var gulp = require('gulp')
var ts = require('gulp-typescript')

var tsConfig = {
  "target": "es6",
  "module": "commonjs",
  "moduleResolution": "node",
  "sourceMap": true,
  "emitDecoratorMetadata": true,
  "experimentalDecorators": true,
  "removeComments": true,
  "noImplicitAny": false,
  "suppressImplicitAnyIndexErrors": true
}

var source = 'src/**/*.ts'
var dist = 'dist/'
var nodeModules = 'node_modules/**/*.*'

gulp.task('tsc', () => {
  return gulp.src(source)
    .pipe(ts(tsConfig))
    .pipe(gulp.dest(dist))
})

gulp.task('watch:tsc', ['tsc'], () => {
  return gulp.watch(source, ['tsc'])
})


gulp.task('watch', ['watch:tsc'])

gulp.task('default', ['tsc'])