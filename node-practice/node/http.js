const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(
    "<h1>Hello from Node HTTP module</h1><p>This page came from a server.</p>",
  );
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
