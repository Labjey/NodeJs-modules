var http = require('http');
var fs= require('fs');
var path=require('path');


//using buffer reading an immage it takes short time and more memory space
//uncomment to use the buffer code 
// http.createServer(function(requiredd,resolve){
//     resolve.writeHead(200,{'content-Type':'image/jpg'});
//     fs.readFile(path.join(__dirname,'image.jpg'),function(error1,image1){
//         if(error1) throw error1;
//         resolve.end(image1);
//     });
// }).listen(8000,'127.0.0.1');


//using stream reading an immage takes short time few space in memory 
http.createServer(function(request,resolve){
            var rs= fs.createReadStream('image.jpg').pipe(resolve);
}).listen(8000,'127.0.0.1');


