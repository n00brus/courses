let preprocessor = "sass";
const {src,dest,parallel,series,watch} = require('gulp');
const browserSync =require('browser-sync').create();
const concat =require('gulp-concat');
const uglify =require('gulp-uglify-es').default;
const sass =require('gulp-sass');
const less =require('gulp-less');
const autoprefixer =require('gulp-autoprefixer');
const cleancss=require('gulp-clean-css');
function browsersync(){
    browserSync.init({
        server:{baseDir: 'app/'},
        notify : false,
        online:true
    })  
}
function scripts(){
    return src(['node_modules/jquery/dist/jquery.min.js',
    'app/js/app.js',
    'app/js/app-template.js'
])
    .pipe(concat('app.min.js'))
    .pipe(dest('app/js/'))
    .pipe(uglify())
    .pipe(browserSync.stream())     
}

// function style(){
//     return  src(['app/'+ preprocessor +'/main.'+ preprocessor +''])
//     .pipe(eval(preprocessor)())
//     .pipe(concat('app.min.css'))
//     .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true}))
//     .pipe(cleancss(({level:{1: {specialComments:0} }, /*format : 'beautify'*/ } )))
//     .pipe(dest('app/css/'))
//     .pipe(browserSync.stream())   
// }

function startwatch(){
    // watch(['app/**/'+ preprocessor +'/**/*'],style);
    watch(['app/**/*.js', '!app/**/*.min.js'],scripts);
    watch(['app/**/*.html']).on('change',browserSync.reload); 
}
exports.browsersync = browsersync;
exports.scripts = scripts;
// exports.style =style;

exports.default = parallel(scripts, browsersync, startwatch); //, style

