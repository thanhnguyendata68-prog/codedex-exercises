const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  
  response.write('Welcome to Neon Noodles!\n\n');
  response.write('==============\n');
  response.write('LATE NITE MENU\n');
  response.write('==============\n\n');
  response.write('RAMEN\n');
  response.write('1. Quantum Truffle Ramen\n\n');
  response.write('EXTRA TOPPINGS\n');
  response.write('1. Hacktivist Pork\n');
  response.write('2. Cybernetic Egg\n');
  response.write('3. Glowing Scallions\n');
  
  response.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});