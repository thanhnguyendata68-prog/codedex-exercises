const http = require('http');

const server = http.createServer((request, response) => {

  let statusCode = 200;
  let contentType = 'text/html; charset=utf-8';
  let body = "";

  if (request.url === "/pikachu"){
    body = '<p>Pika Pika!</p>';
  } else if (request.url === "/sylveon") {
    body = '<p>Sylv Sylv!</p>'
  } else {
    statusCode = 404;
    body = '<p>This Pokémon is currently resting!</p>'
  }

  response.writeHead(statusCode, { 'Content-Type ' : contentType});
});