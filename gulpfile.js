'use strict';

const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync  = require('browser-sync'),
      // concat    = require('gulp-concat'),
      // uglify    = require('gulp-uglifyjs');
      cssnano      = require('gulp-cssnano'),
      rename       = require('gulp-rename'),
      del          = require('del'),
      cache        = require('gulp-cache');

// ! Таск для компиляции sass -> css
gulp.task('sass', function () {
    return gulp.src('app/src/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/src/tools/css/'))
        .pipe(browserSync.reload({stream: true}))
});

// ! Таск для настройки сервера 127.0.0.1:3000
gulp.task('browser-sync', function () {
    browserSync({
        server: {
			baseDir: 'app'
		},
        notify: false
    });
});

gulp.task('scripts', function() {
    return gulp.src('app/src/tools/js/index.js')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('code', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
});

// ! Таск для полного удаления ./build перед сборкой
gulp.task('clean', async function() {
	return del.sync('build');
});

// TODO: конвертирование выбранных файлов для сборки в ./build 
gulp.task('prebuild', async function() {
    let buildCss = gulp.src('./app/src/tools/css/index.min.css')
        .pipe(gulp.dest('build/static/style'))

    let buildFont = gulp.src('./app/src/font/**/*')
        .pipe(gulp.dest('build/static/font'))

    let buildJs = gulp.src([
        './app/src/tools/js/**/*.js',
        './app/src/libs/libs.min.js'
    ])
        .pipe(gulp.dest('build/static/script'))
    
    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('build'));
});

// ! Таск для очистки кеша
gulp.task('clear', function (callback) {
	return cache.clearAll();
})

// ! Таск для наблюдение -> компиляция -> перезагрузка сервера
gulp.task('watch', function () {
    gulp.watch('app/src/sass/*.sass', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('code'));
    gulp.watch('app/src/tools/js/index.js', gulp.parallel('scripts'));
});

// ! Таск для для выполения task('watch')
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
// TODO: полная сборка проекта в ./build
gulp.task('build', gulp.parallel('prebuild', 'clean', 'sass'));