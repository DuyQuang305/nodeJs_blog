const express = require('express')
const app = express()
const port = 8000

app.get('/trangchu', (req, res) => {
        res.send('hello World!')
})

app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
})