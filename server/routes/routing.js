const url = require('url');
const fs = require('fs');

const define = (req, res, postData) => {
    const urlParsed = url.parse(req.url, true);
    let path = urlParsed.pathname;

    prePath = __dirname;

    try {
        let dynPath = './dynamic/' + path;
        let routeDestination = require(dynPath);
        res.end('We have API!');
    } catch (err) {
        let filePath = prePath + '/views' + path + '/index.html';
        fs.readFile(filePath, 'utf-8', (err, html) => {
            if (err) {
                let nopath = '/var/www/html/nodejs/routing/nopage/index.html';
                fs.readFile(nopath, (err , html) => {
                    if(!err) {
                        res.writeHead(404, {'Content-Type': 'text/html'});
                        res.end(html);
                    } else {
                        let text = "Something went wrong. Please contact webmaster@forgetable.ru";
                        res.writeHead(404, {'Content-Type': 'text/plain'});
                        res.end(text);
                    }
                });
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(html);
            }
        });
    }
}

exports.define = define;