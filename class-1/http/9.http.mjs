import { createServer } from "http"; // HTTP protocol
import { findAvailablePort } from "./10.free-port.mjs";

const desiredPort = process.env.PORT ?? 3000; // to set PORT variable in command line write PORT=4200 node 9.http.mjs

// Create a local server to receive data from
const server = createServer((request, response) => {
  console.log("request received");
  response.end("hello world");
});

// Start a server listening for connections.
// server.listen(0, () => { // With port 0 node searchs for an available port automatically.
//   console.log(`server listening on port ${server.address().port}`);
// });

// server.listen(() => { // Another way to grab an arbitrary unused port is ommiting the port number. DON'T DO THIS FOR PRODUCTION.
//   console.log(`server listening on port ${server.address().port}`);
// });

// Using the findAvailablePort function
findAvailablePort(desiredPort)
  .then((port) => {
    server.listen(() => {
      console.log(`server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
