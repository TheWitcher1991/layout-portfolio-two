const http = require('http');
const routing = require('./routes/routing');

let server = http.Server((res, req) => {
    var jsonString = '';
    res.setHeader('Content-Type', 'application/json');
    req.on('data', (data) => {
        jsonString += data;
    });

    req.on('end', () => {
        routing.define(req, res, jsonString); 
    });
});

server.listen(3000, 'localhost');