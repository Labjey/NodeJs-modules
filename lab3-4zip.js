var fs = require('fs');
var zipLib = require('zlib');
var gzip = zipLib.createGzip();

var readab = fs.createReadStream(__dirname + '/source.txt');
var zipped = fs.createWriteStream(__dirname + '/destination.txt.gz');

readab.pipe(gzip).pipe(zipped);