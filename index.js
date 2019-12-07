const express = require('express')

const server = express()

server.use(express.json())

server.listen(5000, () => {
    console.log('\n*** Server is running on https://localhost:5000 ***\n')
})
