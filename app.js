const http = require('http');

function handleRequest(request, response) {
	response.statusCode = 200; // this is a propriety and not a method
	response.end('<h1>Hi there</h1>');
}

const server = http.createServer(handleRequest);

server.listen(3000);
