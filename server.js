const http = require('http');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.end('Hello from Jenkins Docker Pipeline 🚀');
}).listen(port, () => console.log(Server running on ${port}));