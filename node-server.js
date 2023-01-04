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
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
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

  if (requestPath === '/validate-get') {
    sleep(3000).then(() => {
      response.write(`{ "invalid": true, "message": "Error from server"}`);
      response.end();
    });
  }

  if (requestPath === '/validate-post') {
    // handle CORS preflight request
    if (request.headers.accept.includes('application/json')) {
      let body = '';
      request.on('data', (value) => {
        body += value;
      });

      request.on('end', () => {
        if (body?.length) {
          sleep(3000).then(() => {
            response.write(`{ "invalid": true, "message": "Error from server: ${JSON.parse(body).field}"}`);
            response.end();
          })
        } else {
          response.end();
        }
      });
    } else {
      response.end();
    }
  }
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running...');