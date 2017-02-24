// Requires
var path = require("path");
var gulp = require("gulp");
var less = require("gulp-less");

// Fixed Paths
const DIR_ROOT = "web"
const DIR_CSS  = DIR_ROOT + "/css"
const DIR_LESS = DIR_ROOT + "/less"

// File aggregators
const FILES_CSS  = DIR_CSS  + "/**/*.css"
const FILES_LESS = DIR_LESS + "/**/*.less"

/************************* Functions **************************/
var spaces_to_tab = function(files) {
	// TODO
}

/************************* Gulp tasks *************************/
// Default: runs upon simply calling `gulp`
gulp.task("default", ["less", "indent"]);

// Automate: keeps running `gulp` until interrupted
gulp.task("automate", function() {
    gulp.watch(FILES_LESS, ["less"]);
});

// Less: compiles .less files and outputs their compiled .css to the appropriate directory
gulp.task("less", function() {
	return gulp.src(FILES_LESS)
		.pipe(less({
			paths: [ path.join(__dirname, "less", "includes") ]
		}))
		.pipe(gulp.dest(DIR_CSS));
});

gulp.task("indent", function() {
	// TODO
});
