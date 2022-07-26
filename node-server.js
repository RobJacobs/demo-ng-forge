// https://nodejs.org/api/http.html
const http = require('http');
const url = require("url");

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const server = http.createServer((request, response, next) => {
  const requestPath = url.parse(request.url).pathname;

  // request events
  // close
  // connect
  // continue
  // finish
  // information
  // response
  // socket
  // timeout
  // upgrade
  // request.on('close', () => console.log('closed'));

  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Content-Type', 'application/json');

  const data = `{ "data": "response from server ${new Date().toISOString()}" }`;

  if (requestPath === '/') {
    response.write(data);
    response.end();
  }

  if (requestPath === '/long-request') {
    sleep(3000).then(() => {
      response.write(data);
      response.end();
    });
  }
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running...');