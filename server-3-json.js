/**
 * Created by tom-n on 8-6-2017.
 */
var http = require('http');

http.createServer(function (req, res) {
    console.log('Er was een request');
    res.writeHead(200, {'Content-Type' : 'text/json'});

    var exampleArray = ["item1", "item2"];
    var exampleObject = {
        item1: "item1val",
        item2: "item2val"
    };
    var json = JSON.stringify({
        anObject: exampleObject,
        anArray: exampleArray,
        another: "item"
    });
       res.end(json);

}).listen(3000);

console.log('De server luistert naar port 3000');