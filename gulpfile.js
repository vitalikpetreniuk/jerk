var gulp = require('gulp'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	concat      = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify      = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano     = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename      = require('gulp-rename'),// Подключаем библиотеку для переименования файлов
    notify      = require('gulp-notify'); 

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src(['!app/sass/_*.sass','app/sass/**/*.sass']) // Берем источник
        .pipe(sass({includePaths: require('node-normalize-scss').includePaths}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('scripts', function() {
    return gulp.src([
    	'app/libs/jquery/dist/jquery.min.js',
    	'app/libs/owl.carousel/dist/owl.carousel.js',
        'app/libs/jquery-mask-plugin/dist/jquery.mask.min.js',
        'app/libs/aos/dist/aos.js',
        'app/libs/jquery.nicescroll/dist/jquery.nicescroll.min.js',
        'app/libs/mixitup/dist/mixitup.min.js',
        'app/libs/wow/dist/wow.min.js',
        'app/libs/isotope/dist/isotope.pkgd.min.js',
        'app/libs/jquery-mousewheel/jquery.mousewheel.min.js',
        'app/libs/device.js/lib/device.min.js'
    ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/libs.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

gulp.task('pug', function() {
    return gulp.src(['!app/pug/parts/*.pug','app/pug/**/*.pug'])
        .pipe(pug({pretty: true})).on('error', notify.onError(function (error) {
    return 'An error occurred while compiling jade.\nLook in the console for details.\n' + error;
}))
        .pipe(gulp.dest('app')); // указываем gulp куда положить скомпилированные HTML файлы
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('build', [ 'sass', 'scripts'], function() {

    var buildCss = gulp.src([ // Переносим библиотеки в продакшен
        'app/css/main.css',
        'app/css/qa.css',
        'app/css/reviews.css',
        'app/css/results.css',
        'app/css/libs.min.css',
        ])
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

});

gulp.task('watch', ['browser-sync', 'sass','css-libs', 'pug','scripts'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами
    gulp.watch('app/css/**/libs.css', ['css-libs']); 
    gulp.watch('app/pug/**/*.pug', ['pug']); 
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
