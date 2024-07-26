const WebSocket = require('ws');
const port = process.env.PORT || 8080; // Menggunakan PORT dari variabel lingkungan

const wss = new WebSocket.Server({ port });

wss.on('connection', ws => {
    console.log('New connection established');

    ws.on('message', message => {
        console.log('Received:', message);

        // Example of sending a message back
        ws.send(JSON.stringify({ coin: Math.floor(Math.random() * 100) }));
    });

    ws.on('close', () => {
        console.log('Connection closed');
    });

    ws.on('error', error => {
        console.error('WebSocket error:', error);
    });
});

console.log(`WebSocket server is running on ws://localhost:${port}`);
