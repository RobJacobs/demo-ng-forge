// https://nodejs.org/api/http.html
import * as http from 'node:http';
import * as url from 'node:url';
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
      response.write('{ "invalid": true, "message": "Error from server"}');
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
          response.write(`{ "invalid": true, "message": "Error from server: ${bodyObject.field}"}`);
          response.end();
        });
      } else {
        response.end();
      }
    });
  }
});

httpServer.listen(5000);

console.log('Node.js web server at port 5000 is running...');

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

console.log('Node.js web socket server at port 5001 is running...');
