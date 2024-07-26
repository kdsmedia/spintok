const express = require('express');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Start Express server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// WebSocket server
const wss = new WebSocket.Server({ port: 8081 });
wss.on('connection', ws => {
  ws.on('message', message => {
    // Handle incoming WebSocket messages
    console.log(`Received message => ${message}`);
  });
  ws.send('Connection established');
});
