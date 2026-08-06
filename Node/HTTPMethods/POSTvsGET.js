//App Name : Discord

//1. Create : Sending a message in a channel, creating a new text/voice channel, or adding a custom emoji.

//2. Read : Loading and viewing the chat history in a channel, browsing member lists, or searching messages.

//3. Update: Editing a previously sent message, changing your nickname/profile banner, or editing channel permissions

//4. Delete: Deleting a sent message, removing a channel, or kicking.banning a member from the server.

/// GET METHODS
// const http = require('http');

// // Variable goes here 😊
// let visitorCount = 0

// const server = http.createServer((request, response) => {

//   // Your code also goes here 🤗
//   if (request.method === 'GET'){
//     visitorCount++;
//     console.log(`Visitor Count: ${visitorCount}`);
//   }

// });

// server.listen(3000, () => {
//   console.log('Visitor Counter running at http://localhost:3000');
// });



//////// POST METHODS
const http = require('http');

const server = http.createServer((request, response) => {

  // Your code goes here 🐦
  if (request.method === 'POST') {
    let tweet = '';

    // Collect the data sent in the POST request
    request.on('data', (chunk) => {
      tweet += chunk;
    });

    // When the entire request body is received
    request.on('end', () => {
      console.log('New tweet: ', tweet); // Log the tweet to the console

      // Send a simple response
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Tweet received!');
    });
  } else {
    // Handle other HTTP methods (GET, etc.)
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Go back to your terminal!');
  }

});
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

// cURL command:
// curl -X POST http://localhost:3000 -d 'I think soup is a beverage actually...'