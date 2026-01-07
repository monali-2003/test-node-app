const http = require("http");

// Azure gives dynamic PORT, local uses 3000
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world! from Node.js on Azure App Service!");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});