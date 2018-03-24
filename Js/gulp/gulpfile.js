/*=====================================================================================

use 'gulp' para processar os arquivos para a producao

use 'gulp server' para levantar um servidor e escutar mudanças em arquivos sass, css e php

=====================================================================================*/

// Pega as 3 primeiras pastas do caminho absoluto do arquivo
var base_node_modules = __dirname.split("\\").slice(0, 6).join("\\") + "\\node_modules\\";

// Pega a caminho absoluto até a raiz do servidor, quando o gulp iniciali-za a 
// tarefa 'server'
var base_server = __dirname.split("\\").slice(6).join("\\");


gulp = require(base_node_modules + 'gulp'),
imagemin = require(base_node_modules + 'gulp-imagemin'),
clean = require(base_node_modules + 'gulp-clean'),
concat = require(base_node_modules + 'gulp-concat'),
uglify = require(base_node_modules + 'gulp-uglify'),
usemin = require(base_node_modules + 'gulp-usemin'),
cssmin = require(base_node_modules + 'gulp-cssmin');
browserSync = require(base_node_modules + 'browser-sync');
sass = require(base_node_modules + 'gulp-sass');
var criticalCss = require('gulp-penthouse');


//tarefa padrao
gulp.task('default', ['copy'], function () {
    gulp.start('critical');
});


//copia todos os arquivos da pasta atual para a distribuicao
gulp.task('copy', ['clean', 'sass-distribuicao'], function () {
    return gulp.src(["!*.scss", "!*.json", "!./node_modules", "!./**/*.js", , "!./**/*.css", "./**/*",])
        .pipe(gulp.dest('distribuicao'));
});

//exclui todos os arquivos da pasta distribuicao
gulp.task('clean', function () {
    return gulp.src('distribuicao')
        .pipe(clean());
});


//compila arquivos scss (com compactacao)
gulp.task('sass-distribuicao', function () {
    return gulp.src('./*.scss')
        .pipe(sass({ outputStyle: "compress" }))
        .pipe(gulp.dest('distribuicao/css'));
});

gulp.task('critical', ['usemin'] ,function () {
    return gulp.src('distribuicao/css/allconcat.min.css')
        .pipe(criticalCss({
            out: 'critical.css',
            url: "http://localhost:8080/" + base_server,
            width: 1600,
            height: 900,
            strict: true,
            userAgent: 'Penthouse Critical Path CSS Generator'
        })).on('error', function (err) { err.message; })
        .pipe(cssmin())
        .pipe(gulp.dest('distribuicao/css'))
         .pipe(gulp.dest('css'));
});

//faz uma mini-compactacao nas images
gulp.task('build-img', function () {
    gulp.src('distribuicao/images/**/*')
        .pipe(
        imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 2,
        }))
        .pipe(gulp.dest('distribuicao/images'));
});


// procura a marcacao no arquivo
// <!-- build:css ...  e executa a função associada a essa marcacao (nesse caso será a cssmin)
gulp.task('usemin', /*["build-img"],*/ function () {
    return gulp.src(['!distribuicao/**', './**/*.php'])
        .pipe(usemin({
            'js': [uglify],
            'css': [cssmin]
        }))
        .pipe(gulp.dest('distribuicao'));
});


//compila o sass em css (sem compactar o css)
gulp.task('sass', function () {
    return gulp.src('./*.scss')
        .pipe(sass({ outputStyle: "expanded" }).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});


//levanta um servidor e fica escutando mudanças nos arquivos sass, css e php
gulp.task('server', function () {
    browserSync.init(['./*.php', './**/*'], {
        proxy: {
            target: "http://localhost:8080/" + base_server
        }
    });

    gulp.watch("./*.scss", ['sass']);
    gulp.watch(['./*.php', 'css/*.css']).on('change', browserSync.reload)
});
