const http = require('http');
 
const hostname = '127.0.0.1';
const port = 1338;

const server = http.createServer(async(req, res) => {
const write = await res.writeHead(200, { 'Content-Type': 'text/plain' });
const result = write.end('Hello World!!!\n');
return result;
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});