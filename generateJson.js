const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

const writeStream = fs.createWriteStream('largeData.json');

writeStream.write('[');

// Determinando o número de registros de modo que o tamanho do arquivo seja > 1GB
// Isso pode precisar de ajuste, dependendo dos dados reais
const numRecords = 10 * 1000 * 1000; 

for(let i = 0; i < numRecords; i++) {
    let data = {
        id: uuidv4(),
        temperature: getRandom(20, 30),
        humidity: getRandom(40, 60),
        frequency: 60,
        amperage: getRandom(0.1, 0.5),
        carbonDioxide: getRandom(300, 500)
    };

    // Escreve os dados, adiciona uma vírgula se não for o último registro
    if (!writeStream.write(JSON.stringify(data) + (i < numRecords - 1 ? ',' : ''))) {
        // Espera pelo evento 'drain' se não há mais dados a serem escritos no buffer do stream
        await new Promise(resolve => writeStream.once('drain', resolve));
    }
}

writeStream.write(']');
writeStream.end();

writeStream.on('finish', () => {
    console.log('Arquivo largeData.json salvo com sucesso!');
});

writeStream.on('error', (err) => {
    console.log('Erro ao escrever o arquivo!', err);
});