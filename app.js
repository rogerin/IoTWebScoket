const WebSocket = require('ws');

// Inicializar um servidor WebSocket na porta 8080
const server = new WebSocket.Server({ port: 3000 });
let messageCount = 0;

server.on('connection', ws => {
    console.log('ESP32 Connected');
    

    ws.on('message', message => {
        messageCount++;
        //console.log('Received:', message);

        //15:25
        // Supondo que message seja um JSON string, podemos parseá-lo para um objeto
        try {

            if (messageCount % 100 === 0) {
                const data = JSON.parse(message);
                console.log('Temperature:', data.temperature);
                console.log('Humidity:', data.humidity);
                messageCount = 0;
            }
        
            
           
        } catch (e) {
            console.error('Invalid JSON format:', e);
        }


    });

    ws.on('close', () => {
        console.log('ESP32 Disconnected');
    });
});

console.log('WebSocket server started on ws://localhost:8080');