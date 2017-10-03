const gulp = require('gulp'),
	  sourcemaps  = require('gulp-sourcemaps'),
	  sass = require('gulp-sass');



gulp.task('sass', ()=>{
	return gulp.src('css/estilos_waya.sass')

    .pipe(sourcemaps.init()) //cargamos tarea de sourcemaps
	.pipe(
		sass({outputStyle: 'compressed'}).on('error', sass.logError))


  	.pipe(sourcemaps.write('../maps')) //creamos sourcemap aparte


	.pipe(gulp.dest('css/'))


});


gulp.task('watch', ()=>{

	gulp.watch('**/**.sass', ['sass']);

});

