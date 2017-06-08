/**
 * Created by tom-n on 8-6-2017.
 */
var http = require('http');



http.createServer(function (request, response){
    console.log('Er was een request.');
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello World!');
    response.end();
}).listen(3000);

console.log('De server luisterd op port 3000');