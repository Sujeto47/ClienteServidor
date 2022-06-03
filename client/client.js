
  const fs = require('fs');

  fs.readFile('C:/Users/EQUIPO/Downloads/Noveno Semestre/Distribuidos/Cliente-SevidorNode/texto/Hola.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    //console.log(data);
    const net = require('net');
const options = {
    port: 4000,
    host: '192.168.0.13'
}
const client = net.createConnection(options)

client.on('connect', ()=>{
    console.log('Conexion Satisfactoria')
    client.write(data)
})

client.on('Error', (err)=>{
    console.log(err.message)
})
  });
/*const net = require('net');
const options = {
    port: 4000,
    host: '192.168.0.13'
}
const client = net.createConnection(options)

client.on('connect', ()=>{
    console.log('Conexion Satisfactoria')
    client.write('Hola Servidor :v')
})

client.on('Error', (err)=>{
    console.log(err.message)
})*/