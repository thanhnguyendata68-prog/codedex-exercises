const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end('🏃🏻‍➡️🚉🍿📺🎞️🥺💔😭😭🍿🥤');
  // Add a .writeHead() to prepare a response where the content type is plain text and the status code 200.
  // Add a .end() with your emojified conversation.
});

// Next, listen in on the port 3000:
server.listen(3000, () => {
  console.log("I love you so much!");
});