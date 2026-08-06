const http = require('http');

// Your code goes here! 💫
let username = 'it\'s charli';

const server = http.createServer((request, response) => {

  // Your code also goes here! ✨
  if (request.method === 'PATCH') {
    let patchData = '';

    request.on('data', (chunk) => {
      patchData += chunk;
    });

    request.on('end', () => {
      console.log('Original Bio: ', username);

      // Only update the username with the patch data (assuming it's a string to append)
      username += patchData;

      console.log('Updated Bio: ', username);

      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Bio updated!');
    });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Go back to your terminal!');
  }

});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// run this is your terminal : curl -X PATCH http://localhost:3000 -d ", baby 💚"