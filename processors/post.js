// uxebu postprocessor, this is specific to the uxebu.com website

var appConfig   = require('../appConfig');
var appUtil   = require('../appUtil');
var exec  = require('child_process').exec;
var path = require('path');

appUtil.statusLog('Post processor\t' + 'Copying licensed content');

var cmd = 'cp -r ' + path.join(__dirname, '../../', 'uxebu.com-data/bg') + ' ' + appConfig.releaseDir + '/static/bg';

exec(cmd,
    function (err, stdout, stderr) {
        if (err !== null) {
            console.log('Error copying (' + cmd + ') static files: ' + err);
        }else{
            console.log('Copied files from post processor');
        }
    }
);

appUtil.statusLog('Post processor\t' + 'Copying openid files');

var cmd = 'cp -r ' + path.join(__dirname, '../../', 'uxebu.com-data/openid') + '/* ' + appConfig.releaseDir + '';

exec(cmd,
    function (err, stdout, stderr) {
        if (err !== null) {
            console.log('Error copying (' + cmd + ') static files: ' + err);
        }else{
            console.log('Copied files from post processor');
        }
    }
);

var cmd = 'cp -r ' + path.join(__dirname, '../../', 'uxebu.com-data/openid') + '/.well-known ' + appConfig.releaseDir + '/.well-known';

exec(cmd,
    function (err, stdout, stderr) {
        if (err !== null) {
            console.log('Error copying (' + cmd + ') static files: ' + err);
        }else{
            console.log('Copied files from post processor');
        }
    }
);

appUtil.statusLog('Post processor\t' + 'Copying html5-workshop files');

var cmd = 'cp -r ' + path.join(__dirname, '../../', 'uxebu.com-data/html5-workshop') + ' ' + appConfig.releaseDir;

exec(cmd,
    function (err, stdout, stderr) {
        if (err !== null) {
            console.log('Error copying (' + cmd + ') static files: ' + err);
        }else{
            console.log('Copied files from post processor');
        }
    }
);

appUtil.statusLog('Post processor\t' + 'Copying conversion files');

var cmd = 'cp -r ' + path.join(__dirname, '../../', 'uxebu.com-data/conversion') + ' ' + appConfig.releaseDir;

exec(cmd,
    function (err, stdout, stderr) {
        if (err !== null) {
            console.log('Error copying (' + cmd + ') static files: ' + err);
        }else{
            console.log('Copied files from post processor');
        }
    }
);

