const express = require('express')

const app = express()

const port = 3000

app.use(express.static(__dirname + '/public'))

app.get('/home', (req, res) => {
    console.log(req)

    res.sendFile(__dirname + '/views/home.html')
})
app.get('/about', (req, res) => {
    console.log(req)

    res.sendFile(__dirname + '/views/about.html')
})
app.get('/works', (req, res) => {
    console.log(req)

    res.sendFile(__dirname + '/views/works.html')
})
app.get('/gallery', (req, res) => {
    console.log(req)

    res.sendFile(__dirname + '/views/gallery.html')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})