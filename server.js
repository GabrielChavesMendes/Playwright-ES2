const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let filePath = req.url === '/' ? './index.html' : '.' + req.url;
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(500);
            res.end('Erro interno');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
}).listen(5173, '127.0.0.1', () => {
    console.log('App rodando em http://127.0.0.1:5173');
});