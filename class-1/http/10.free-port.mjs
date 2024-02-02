import { createServer } from "net";
// The node:net module provides an asynchronous network API for creating stream-based TCP or IPC servers (createServer) and clients (createConnection).
// Is faster than http module.

export function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = createServer(); // create a server to find out if the desired port is available (trying to listen it).

    server.listen(desiredPort, () => { // if we can listen the desiredPort is because it is available.
      const { port } = server.address(); // so get the port number.

      server.close(port); // close the server to leet the port available again.

      resolve(port); // and resolve with te available port number.
    });

    server.on("error", (error) => {
		console.log(error);
		if (error.code === "EADDRINUSE") {
			// If the desired port is not available, we get the EADDRINUSE (address already in use) error, so we call 
			// this method (findAvailablePort) recursively but with the 0 number, remember that 0 is to grab an arbitrary unused port.
			findAvailablePort(0)
			.then((port) => resolve(port));
		} else {
			reject(error.code);
		}
	});
  });
}
