var gulp = require("gulp");
var watch = require("gulp-watch");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var paths = {
	ts: 'src/ts/*.ts'
}
gulp.task("ts", function () {
    return gulp.src(paths.ts)
        .pipe(tsProject())
        .js.pipe(gulp.dest("src/js"));
});

gulp.task('watch', ['ts'], function() {
	return watch(paths.ts, function() {
		gulp.start('ts');
	});
});

gulp.task('default', ['ts']);