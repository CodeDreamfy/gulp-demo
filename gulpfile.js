const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const del = require('del');
const cssmqpacker = require('csswring');
const concat = require('gulp-concat');
const minify = require('gulp-minify-css')

const _postcss = require('gulp-postcss');
const postcss = require('postcss');
const _import = require('postcss-import');
const press = require('press');
const cssnext = require('postcss-cssnext'); //带有autoprefix
const px2rem = require('postcss-px2rem');
const cssnano = require('cssnano');

const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

const notify = require('gulp-notify');
const filter = require("gulp-filter");

gulp.task('postcss', ()=>{
  const file = filter('./src/css/lib/*.css', {restore: true});
  const processors = [
    _import,
    cssnext({
      features: {
        autoprefixer: {}
      }
    }),
    cssnano(),
    cssmqpacker,
    px2rem({remUnit: 100}),
  ];
  return gulp.src(['./src/css/lib/*.css','src/css/main.css'])
    .pipe(file)
    .pipe(_postcss(processors))
    .on('error', errorHandler)
    .pipe(file.restore)
    .pipe(concat('main.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minify())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(notify("css build success!"));
});


gulp.task('toes', ()=>{
  return gulp.src('src/js/main.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'))
    .pipe(notify("js build success!"));
})

gulp.task('imgmin', ()=>{
  return gulp.src('src/img')
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
  return del(['./dist/'])
})

gulp.task('watch', ()=> {
  gulp.watch('./src/css/**/*.css', ['postcss'])
  gulp.watch('./src/js/**/*.js', ['toes'])
})

gulp.task('default', ['clean', 'postcss', 'toes', 'watch']);

function errorHandler(error) {
  console.log(error.message);
  console.log(error.filename);
  console.log('line:', error.line, 'column:', error.column);
  this.emit('end');
}