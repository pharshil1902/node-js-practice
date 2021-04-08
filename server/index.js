const http = require('http');
const data = require('../server/get_data_firestore');


const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');
  res.end(JSON.stringify(data));
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});