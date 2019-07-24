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

const PATHS = {
    sass: {
        src: 'app/src/sass/**/*.sass',
        dest: 'app/src/tools/css'
    },
    build: 'build',
    browser: 'app',
    js: {
        src: 'app/src/tools/js/index.js',
        libs: 'app/src/libs/libs.min.js',
        all: 'app/src/tools/js/**/*.js',
        build: 'build/static/script'
    },
    html: {
        src: 'app/*.html',
        build: 'build',
    },
    css: {
        src: 'app/src/tools/css/index.min.css',
        build: 'build/static/style'
    },
    font: {
        src: 'app/src/font/**/*',
        build: 'build/static/font'
    }
}

// ! Таск для компиляции sass -> css
gulp.task('sass', function () {
    return gulp.src(PATHS.sass.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(PATHS.sass.dest))
        .pipe(browserSync.reload({stream: true}))
});

// ! Таск для настройки сервера 127.0.0.1:3000
gulp.task('browser-sync', function () {
    browserSync({
        server: {
			baseDir: PATHS.browser
		},
        notify: false
    });
});

gulp.task('scripts', function() {
    return gulp.src(PATHS.js.all)
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('code', function() {
    return gulp.src(PATHS.html.src)
        .pipe(browserSync.reload({stream: true}))
});

// ! Таск для полного удаления ./build перед сборкой
gulp.task('clean', async function() {
	return del.sync(PATHS.build);
});

// TODO: конвертирование выбранных файлов для сборки в ./build 
gulp.task('prebuild', async function() {
    let buildCss = gulp.src(PATHS.css.src)
        .pipe(gulp.dest(PATHS.css.build))

    let buildFont = gulp.src(PATHS.font.src)
        .pipe(gulp.dest(PATHS.font.build))

    let buildJs = gulp.src([
        PATHS.js.all,
        PATHS.js.libs
    ])
        .pipe(gulp.dest(PATHS.js.build))
    
    var buildHtml = gulp.src(PATHS.html.src)
        .pipe(gulp.dest(PATHS.html.build));
});

// ! Таск для очистки кеша
gulp.task('clear', function (callback) {
	return cache.clearAll();
})

// ! Таск для наблюдение -> компиляция -> перезагрузка сервера
gulp.task('watch', function () {
    gulp.watch(PATHS.sass.src, gulp.parallel('sass'));
    gulp.watch(PATHS.html.src, gulp.parallel('code'));
    gulp.watch(PATHS.js.all, gulp.parallel('scripts'));
});

// ! Таск для для выполения task('watch')
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));

// TODO: полная сборка проекта в ./build
gulp.task('build', gulp.parallel('prebuild', 'clean', 'sass'));