const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const response = {
      timestamp: new Date().toISOString(),
      ip: req.socket.remoteAddress
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});