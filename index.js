const express = require('express')

// routers
const welcomeRouter = require('./routers/welcome')

const server = express()

server.use(express.json())
server.use('/', welcomeRouter)

server.listen(4000, () => {
    console.log('\n*** Server is running on https://localhost:4000 ***\n')
})
