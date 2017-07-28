const version = require('../package.json').version;
var fs = require('fs-extra');

fs.copySync('./test.js', './test' + version + '.js');