var gulp = require('gulp');  
var less = require('gulp-less');  
var path = require('path');

gulp.task('less', function () {  
  gulp.src('./less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {  
  gulp.watch('./less/**/*.less', ['less']);
});

gulp.task('default', ['less', 'watch'], function() {

});