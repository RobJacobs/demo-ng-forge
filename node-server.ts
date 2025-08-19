import * as http from 'http';
import * as url from 'url';
import { WebSocketServer } from 'ws';

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const httpServer = http.createServer((request, response) => {
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

  if (requestPath === '/') {
    response.write(JSON.stringify({ data: `response from server ${new Date().toISOString()}` }));
    response.end();
  }

  if (requestPath === '/long-request') {
    sleep(3000).then(() => {
      response.write(JSON.stringify({ data: new Date() }));
      response.end();
    });
  }

  if (requestPath === '/validate-get') {
    sleep(3000).then(() => {
      response.write(JSON.stringify({ invalid: true, message: 'Error from server' }));
      response.end();
    });
  }

  if (requestPath === '/validate-post') {
    let body = '';
    request.on('data', (value) => {
      body += value;
    });

    request.on('end', () => {
      if (body?.length) {
        const bodyObject = JSON.parse(body);
        sleep(3000).then(() => {
          response.write(JSON.stringify({ invalid: true, message: `Error from server: ${bodyObject.field}` }));
          response.end();
        });
      } else {
        response.end();
      }
    });
  }
});

httpServer.listen(5000);
console.log('Node http server at port 5000 is running...');

const webSocketServer = new WebSocketServer({ port: 5001 });
let webSockets = [];

webSocketServer.on('connection', (socket) => {
  console.log('connection opened');
  webSockets.push(socket);

  socket.on('message', (value) => {
    console.log(JSON.parse(value));
    sleep(3000).then(() => {
      webSockets.forEach((s) => {
        console.log('sending message');
        s.send(JSON.stringify({ data: 'message from backend', date: new Date() }));
      });
    });
  });

  socket.on('close', () => {
    webSockets = webSockets.filter((s) => s !== socket);
    console.log('connection closed');
  });
});

console.log('Node web socket server at port 5001 is running...');
