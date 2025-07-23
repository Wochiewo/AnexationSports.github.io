const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const cors = require('cors')

const app = express()
const server = http.createServer(app)
const io = socketIo(server, {
  cors: { origin: "*" }
})

app.use(express.json())
app.use(cors())

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Real event integration would go here
io.on('connection', (socket) => {
  console.log('New client connected')
  // Emit mock match event every 10s
  const interval = setInterval(() => {
    socket.emit('match_event', {
      matchId: 1,
      eventType: 'goal',
      team: 'Home Team',
      time: new Date().toISOString()
    })
  }, 10000)

  socket.on('disconnect', () => {
    clearInterval(interval)
    console.log('Client disconnected')
  })
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => console.log(`Backend listening on port ${PORT}`))