const net = require('net');

const server = net.createServer()
server.on('connection', (socket)=>{
    socket.on('data',(data)=>{
        console.log('\nMensaje recibido desde el cliente: '+ data)
        var caracteres = data.length;
        //var palabras = data.split(' ');
        console.log('\nEl mensaje tiene '+caracteres+' caracteres')
        //console.log('\nEl mensaje tiene '+separarString(data)+' palabras')
        socket.write('Recibido')
    })

    socket.on('close', ()=>{
        console.log('Comunicacion Finalizada')
    })
    socket.on('error', (err)=>{
        console.log(err.message)
    })
})
server.listen(4000, ()=>{
    console.log('Servidor esta escuchando en la puerta', server.address().port)
})
