const gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    webpack = require("webpack"),
    path = require('path'),
    clean = require('gulp-clean'),
    historyApiFallback = require('connect-history-api-fallback');

const configApp = require('./webpack.app.js');

const appSources = ['src/**/*.jsx', 'src/**/*.js'];
const scssEntry = 'assets/scss/style.scss';
const scssSources = 'assets/scss/**/*.scss';

const outpuDir = 'build';


const onBuild = (done) => {
    return function (err, stats) {
        if (err) {
            gutil.log(gutil.colors.red('Error: '), err)
        }
        else {
            gutil.log(gutil.colors.green('webpack: '), stats.toString({colors: true}));
        }

        if (done) {
            done();
        }
    }
}


gulp.task('build-app', (done)=> {
    webpack(configApp).run(onBuild(done));
});

gulp.task('refresh-app', ['build-app'], () => {
    return gulp.src('').pipe(connect.reload());
});

gulp.task('refresh-css', ['sass'], () => {
    return gulp.src('').pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(appSources, ['refresh-app']);
});

gulp.task('sass:watch', function () {
    gulp.watch(scssSources, ['refresh-css']);
});

gulp.task('sass', function () {
    return gulp.src(scssEntry)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('connect', ()=> {
    connect.server({
        root: '.',
        livereload: true,
        middleware: function(connect, opt) {
            return [ historyApiFallback({}) ];
        }
    })
});

gulp.task('set-dev-node-env', function () {
    return process.env.NODE_ENV = 'dev';
});


gulp.task('dev', ['set-dev-node-env', 'build-app', 'refresh-app', 'sass', 'sass:watch', 'connect', 'watch']);
