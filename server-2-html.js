/**
 * Created by tom-n on 8-6-2017.
 */
var http = require('http');

function onRequest(req, res) {
    console.log('Er was een request.');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1><p>Dit is HTML!</p>')
    res.end();
}

http.createServer(onRequest).listen(3000);

console.log('De server luistert op port 3000');