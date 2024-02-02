import { createServer } from "http";

// Create a local server to receive data from
const server = createServer((request, response) => {
  console.log("request received");
  response.end("hello world");
});

// Start a server listening for connections.
// server.listen(0, () => { // With port 0 node searchs for an available port automatically.
//   console.log(`server listening on port ${server.address().port}`);
// });

server.listen(() => { // Another way to grab an arbitrary unused port is ommiting the port number. DON'T DO THIS FOR PRODUCTION.
  console.log(`server listening on port ${server.address().port}`);
});
