// npm init
// npm install --save-dev gulp
// npm install node-sass gulp-sass gulp-sourcemaps --save-dev
// npm install gulp-concat gulp-uglify --save-dev
// npm install gulp-inject-views --save-dev


const gulp = require('gulp');
const sass = require('gulp-sass');
// const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const inject = require('gulp-inject-views');


const paths = {
  styles: {
    src: './src/scss/**/*.scss',
    dest: './dist'
  },
  injects: {
    src: './src/js/cookie-consent.js',
    html: './src/html/**/*.html',
    dest: './dist'
  },
};

	
function css() {
  return gulp
  .src(paths.styles.src)
  // .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  // .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.styles.dest))
}

exports.css = css;


function injection() {
  return gulp
  .src(paths.injects.src)
  .pipe(inject(paths.injects.html))
  .pipe(concat('cookie-consent.js'))
  .pipe(uglify())
  .pipe(gulp.dest(paths.injects.dest))
}

exports.inject = injection;


function watch() {
  gulp.watch(paths.styles.src, css);
  gulp.watch(paths.injects.src, injection);
}
	
exports.watch = watch;