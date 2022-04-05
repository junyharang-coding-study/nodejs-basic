var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request, response) {

    var url = request.url;

    console.log(url);

    if(url == '/') {
        url = '/index.html';
    }   // if(request.url == '/') 끝

    if(url == '/favicon.ico') {

        return response.writeHead(404);

    }   // if(request.url == '/favicon.ico') 끝

    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});

app.listen(3000);