const gulp = require("gulp");
const del = require("del");
const run = require("gulp-run");
var replace = require('gulp-replace');
const colors = require("colors/safe");
const config = require("./gulpfile.config.json");

const sleep = timeout => () => new Promise(fulfill => setTimeout(fulfill, timeout));

const deleteDist = () => del("dist/", { force: true });

const copyBundle = () => gulp
    .src(config.source.bundle)
    .pipe(replace("//# sourceMappingURL=bundle.js.map", "//# sourceMappingURL=../images/bundle.js.map"))
    .pipe(gulp.dest(config.target.scripts));

const copyBundleMap = () => gulp
    .src(config.source.map)
    .pipe(gulp.dest(config.target.images));

const copyControlAddInScripts = () => gulp
    .src(config.controlAddInScripts.scripts)
    .pipe(gulp.dest(config.target.scripts));

const build = callback => {
    run("npm run-script build", { verbosity: 3 })
        .exec(error => {
            if (error) {
                console.error(colors.red("[Gulp.Build] A compilation error occurred, check output."));
                deleteDist();
            } else {
                console.log(colors.green("[Gulp.Build] Compilation succeeded."));
            }
            callback(error);
        });
}

const watchReact = () => gulp.watch(
    config.source.watch,
    gulp.series(
        sleep(config.source.watchTimeout),
        build,
        gulp.parallel(copyBundle, copyBundleMap),
        deleteDist
    ));

const watchControlAddIn = () => gulp.watch(
    config.controlAddInScripts.watch,
    gulp.series(
        sleep(config.controlAddInScripts.watchTimeout),
        copyControlAddInScripts
    )
);

exports.watch =
    gulp.parallel(watchReact, watchControlAddIn);
