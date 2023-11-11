Este projeto é um servidor WebSocket implementado em Node.js, projetado para se comunicar com um dispositivo ESP32. O servidor é iniciado na porta 3000, aguardando conexões. Aqui está uma descrição detalhada do funcionamento e propósito do projeto:


<p aling="center">
  <img src="/assets/imgs/img-socket.png" width="200" />
 
</p>
---

**Descrição do Projeto de Servidor WebSocket para ESP32:**

**Funcionalidade Principal:**
Este servidor WebSocket, desenvolvido em Node.js, estabelece uma conexão em tempo real com um dispositivo ESP32. Ele é configurado para rodar na porta 3000 e foi projetado para receber e processar dados transmitidos pelo ESP32.

**Conexão e Monitoramento:**
Quando um ESP32 se conecta ao servidor, é registrada uma mensagem no console indicando "ESP32 Connected". Da mesma forma, quando o ESP32 se desconecta, o servidor registra "ESP32 Disconnected", permitindo um monitoramento eficiente do estado da conexão.

**Gerenciamento de Mensagens:**
O servidor conta as mensagens recebidas do ESP32. A cada 100 mensagens, ele processa uma dessas mensagens supondo que seja um JSON contendo dados de temperatura e umidade. Este processamento inclui o parsing do JSON e a exibição dos valores de temperatura e umidade no console. Isso demonstra uma aplicação prática para monitoramento de ambientes, como controle de clima em estufas ou salas de servidores.

**Tratamento de Erros:**
O servidor está equipado com um tratamento de erros para garantir que apenas mensagens no formato JSON válido sejam processadas. Em caso de formatos inválidos, um erro é registrado no console, garantindo a robustez e a confiabilidade do sistema.

**Aplicações:**
Este projeto é ideal para aplicações IoT (Internet das Coisas) onde monitoramento remoto e em tempo real de dados ambientais é necessário. Ele pode ser adaptado para uma variedade de cenários, como monitoramento de condições ambientais em casas inteligentes, estufas, armazéns, ou qualquer ambiente onde a temperatura e a umidade precisam ser rastreadas de forma eficiente.

**Início do Servidor:**
Por fim, o servidor sinaliza seu início com uma mensagem no console: "WebSocket server started on ws://localhost:8080", indicando que está pronto para aceitar conexões.

---

Esta descrição oferece uma visão clara do propósito e das funcionalidades do servidor WebSocket, destacando seu uso em aplicações IoT para monitoramento de dados ambientais.