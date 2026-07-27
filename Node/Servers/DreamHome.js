const http = require('http');
const fs = require('fs');
const path = require('path');

// Reusable navigation bar to display on every page
const navMenu = `
  <nav style="margin-bottom: 20px; padding: 10px; background-color: #f0f0f0; border-radius: 8px;">
  <a href="/">Home</a> | 
    <a href="/living-room">Living Room</a> | 
    <a href="/dining-room">Dining Room</a> | 
    <a href="/kitchen">Kitchen</a> | 
    <a href="/bedroom">Bedroom</a> | 
    <a href="/office">Office</a> | 
    <a href="/bathroom">Bathroom</a>
  </nav>
`;


const server = http.createServer((request, response) => {
  // 1. Check if the request is asking for an image in the /photo directory
  if (request.url.startsWith('/photo/')) {
    const filePath = path.join(__dirname, request.url);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        response.writeHead(404, { ' Content-Type': 'text/plain' });
        response.end('Image not found');
      } else {
        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
        response.end(data);
      }
    });
    return; // Stop execution here so it doesn't process the HTML logic below

  }

  // 2. Otherwise, handle your HTML routes as normal
  let statusCode = 200;
  let contentType = 'text/html; charset=utf-8';
  let body = '';

  if (request.url === '/') {
    body = '<h1>Home</h1><p>This totally covers my home.</p><img src="/photo/home.jpg" width="400"/>';
  } else if (request.url === '/living-room') {
    body = '<h1>Living Room</h1><p>It is one of my favorite rooms.</p><img src="/photo/living-room.jpg" width="400"/>';
  } else if (request.url === '/dining-room') {
    body = '<h1>Dining Room</h1><p>Every meal my family sits around the table to enjoy food.</p><img src="/photo/dining-room.jpg" width="400"/>';
  } else if (request.url === '/kitchen') {
    body = '<h1>Kitchen</h1><p>The place to cook perfect food.</p><img src="/photo/kitchen.jpg" width="400"/>';
  } else if (request.url === '/bedroom') {
    body = '<h1>Bedroom</h1><p>A wonderful place where I can dream whenever I am stressed out.</p><img src="/photo/bedroom.jpg" width="400"/>';
  } else if (request.url === '/office') {
    body = '<h1>Office</h1><p>If you want to earn money, let\'s go to the office.</p><img src="/photo/office.jpg" width="400"/>';
  } else if (request.url === '/bathroom') {
    body = '<h1>Bathroom</h1><p>The place that washes my mind and body.</p><img src="/photo/bathroom.jpg" width="400"/>';
  } else {
    statusCode = 404;
    body = '<h1>404 Not Found</h1><p>Page does not exist.</p>';
  }

  response.writeHead(statusCode, { 'Content-Type': contentType });
  response.end(navMenu + body);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});