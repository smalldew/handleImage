
let path = process.env.npm_package_config_path || './';  //默认路径为 './'

let vs = process.env.npm_package_config_vs || 'v_1_0_0';  // 默认版本 'v_1_0_0'

let gulp = require('gulp');

let rename = require('gulp-rename');

let smushit = require('gulp-smushit');


gulp.task('img', function(a) {

    let version = vs
    
    // 原图片路径
    let imageHandledBeforePath = path + '/handleBeforeImages' 
    // 处理后图片路径
    let imageHandledAfterPath = path + '/handleAfterImages'

    //只进行XX格式
    gulp.src([imageHandledBeforePath + '/*.{png,jpg,gif,ico}'])
        .pipe(smushit({
            verbose: true
        }))
        .pipe(rename({
            prefix: version,
        }))
        .pipe(gulp.dest(imageHandledAfterPath));
})