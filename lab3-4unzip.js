var fs = require('fs');
var zipfile = require('zlib');
var unzipF = zipfile.createGunzip();

var compressed = fs.createReadStream(__dirname + '/destination.txt.gz');
var readable = fs.createWriteStream(__dirname + '/source2.txt');

compressed.pipe(unzipF).pipe(readable);