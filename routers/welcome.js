const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('<h2>Please go to "http://localhost:4000/api/posts"</h2>')
})

router.get('/api', (req, res) => {
    res.json({message: 'Welcome to the API! Please go to "http://localhost:4000/api/posts" to get started!'})
})

module.exports = router