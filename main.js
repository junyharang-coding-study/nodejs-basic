var http = require('http');
var fs = require('fs');
var url = require('url');           // Require는 '요구하다'라는 뜻 -> url이라는 Module을 이용하겠다는 의미로 url이라는 변수로 이용하겠다는 의미.

var app = http.createServer(function(request, response) {

    var _url = request.url;

    var queryData = url.parse(_url, true).query;

    var title = queryData.id;

    console.log(title);

    if(_url == '/') {
        // _url = '/index.html';
        title = 'Welcome';
    }   // if(request.url == '/') 끝

    if(_url == '/favicon.ico') {

        return response.writeHead(404);

    }   // if(request.url == '/favicon.ico') 끝

    response.writeHead(200);

    fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description) {

        var template = `
        <!doctype html>
            <html>
            <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
            </head>
            <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>
                ${description}
            </p>
            </body>
            </html>
        `;
    
        response.end(template);

    })

});

app.listen(3000);