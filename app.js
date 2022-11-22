const net = require('node:net')
const { fis } = require('./fis')

const server = net.createServer()

server.on('connection', (socket) => {
  socket.on('data', (data) => {
    const { device } = JSON.parse(`${data}`)

    console.log('device', device)

    const response = fis(device)
    socket.write(JSON.stringify(response))
  })

  socket.on('close', () => {
    console.log('conección cerrada')
  })

  socket.on('error', (error) => {
    console.log('error', error.message)
  })
})

server.listen(4000, () => {
  console.log(' servidor corriendo en el puerto 4000')
})
