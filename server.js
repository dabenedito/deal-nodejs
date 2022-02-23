const http = require('http');

http.createServer((request, response) => {
    if(request.url === '/produto') {
        response.end(JSON.stringify({
            message: 'produto'
        }));
    }

    if(request.url === '/usuarios') {
        response.end(JSON.stringify({
            message: 'usuarios'
        }));
    }
    
    response.end(JSON.stringify({
        data: 'Hello World'
    }));
}).listen(4001, () => console.log("Servidor rodando na porta 4001."));