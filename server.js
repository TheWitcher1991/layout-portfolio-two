const http = require('http');
const fs = require('fs')

const hostName = '127.0.0.1';
const port = 3000;

let server = http.createServer(function (req, res) {
    console.log(`URL страницы - ${req.url}`);
    if (req.url === '/index') {
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/views/index.html').pipe(res);
    } else {
        res.writeHead(404, {'Content-type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(port, hostName, function () {
    console.log(`Server started on port ${port}`);
});
