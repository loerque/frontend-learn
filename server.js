'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response)  {
    if(request.url == "/styles.css") {
        const css = fs.readFileSync('styles.css', 'utf8');
        response.end(css);
    } else {
        const html = fs.readFileSync('index.html', 'utf8');
        response.end(html);
    }


});


server.listen(process.env.PORT || 3000);
console.log('Server started');
