const http = require('http');

// Your code goes here! 💭
let username = 'coolCat123';

const server = http.createServer((request, response) => {

  // Your code also goes here! 💬
  if (request.method === 'DELETE') {
    console.log('Original Username: ', username);
    username = null;
    console.log('Username deleted!');

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Username deleted!');
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Go back to your terminal!');
  }

});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});