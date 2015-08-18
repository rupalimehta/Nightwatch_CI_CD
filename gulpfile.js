var HtmlReporter = require('nightwatch-html-reporter');

var gulp = require('gulp'),
    nightwatch = require('gulp-nightwatch');

gulp.task('default', function() {
  gulp.src('nightwatch.js')
    .pipe(nightwatch({
      configFile: 'D:/NodeJsWorkspace_CI/Ems_Nightwatch/node_modules/nightwatch/bin/nightwatch.json'
    }))
	.pipe(gulp.dest('./build.html'));
});





