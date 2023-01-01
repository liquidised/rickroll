
const express = require('express')
const app = express()
const port = 3000

app.get('/verify', async (req, res) => {
	res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
})


// start the server
app.listen(port, () => {
    console.log(`Started the server on ${port}`)
})
