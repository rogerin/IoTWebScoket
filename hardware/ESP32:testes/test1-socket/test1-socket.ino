extern "C" {
    #include "soc/soc.h"
    #include "soc/rtc_cntl_reg.h"
}
#include <ArduinoWebsockets.h>
#include <WiFi.h>

const char* ssid = "Cariri";  // Your WiFi SSID
const char* password = "0987654321";  // Your WiFi password

const char* websocket_server = "192.168.68.105";  // IP do seu servidor Node.js
const int websocket_port = 3000;  // Porta do seu servidor WebSocket

using namespace websockets;

WebsocketsClient client;
int temperature = 0;
int humidity = 0;
void setup() {
     WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0); //disable brownout detector
  
    Serial.begin(115200);
    
    // Conectar ao WiFi
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("Connected to WiFi");

    // Conectar ao WebSocket Server
    client.connect(websocket_server, websocket_port, "/");
}

void loop() {
    if(client.available()) {
        // Enviar dados JSON
        ++temperature;
        ++humidity;
        String jsonData = "{\"temperature\": ";
/Users/rogerioalencarfilho/Projetos/startups/IoTData/TestesWS        jsonData += temperature;
        jsonData += ",\"humidity\": ";
        jsonData += humidity;
        jsonData += "}";
        
        client.send(jsonData);
        delay(100);  // Aguarde 1 segundo antes de enviar novamente
    }
}