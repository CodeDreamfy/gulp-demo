const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
//const babel = require('gulp-babel');
const rename = require('gulp-rename');
const del = require('del');
const cssmqpacker = require('csswring');
const concat = require('gulp-concat');

const _postcss = require('gulp-postcss');
const postcss = require('postcss');
const precss = require('precss');   // 一个顶好几个
const cssnext = require('postcss-cssnext'); //带有autoprefix
const px2rem = require('postcss-px2rem');
const url = require('postcss-url');
const cssnano = require('cssnano');

const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

const notify = require('gulp-notify');
const filter = require("gulp-filter");

const webpack = require('webpack-stream');

gulp.task('postcss', ()=>{
  const file = filter('src/css/lib/*', {restore: true});
  const plugins = [
    precss({parser: require('postcss-scss')}),
    px2rem({remUnit: 100}),
    cssmqpacker,
    cssnano()
  ];
  return gulp.src('./src/css/main.css')
    .pipe(_postcss(plugins))
    .on('error', errorHandler)
    .pipe(concat('main.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(notify("css build success!"));
});


gulp.task('toes', ()=>{
  return gulp.src('src/js/main.js')
    .pipe(sourcemaps.init())
    .pipe(webpack({
      //watch: true,
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' },
        ],
      },
    }))
    .pipe(sourcemaps.write("."))
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(notify("js build success!"));
})

gulp.task('imgmin', ()=>{
  return gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
    .pipe(notify("image build success!"));
})

gulp.task('build', ['toes','postcss', 'imgmin'], ()=>{
  return gulp.src([
    'dist/css/**/*.css',
    'dist/js/**/*.js',
  ])
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
    .pipe(notify("Gulp build success!"));
})

gulp.task('clean', ()=> {
  return del(['./dist/**/*']);
})

gulp.task('watch', ()=> {
  gulp.watch('./src/css/**/*.css', ['postcss']);
  gulp.watch('./src/js/**/*.js', ['toes']);
})

gulp.task('default', ['clean', 'postcss', 'toes','imgmin', 'watch']);

function errorHandler(error) {
  console.log(error.message);
  console.log(error.filename);
  console.log('line:', error.line, 'column:', error.column);
  this.emit('end');
}