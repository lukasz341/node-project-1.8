var fs = require('fs');

var http = require('http');

var server = http.createServer();



server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            response.write(data);
            response.end();
        
        });
        
    } else {
            response.statusCode = 404;
            fs.readFile('images/404error.jpg', function(err, data) {
                response.writeHead(200, {"Content-Type": "image/jpeg"});
              
                response.end(data);
            });
    }
});



server.listen(8080);

