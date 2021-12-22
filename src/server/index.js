// TODO: Configure the environment variables
var path = require('path')
var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
require('dotenv').config();
const fetch = require('node-fetch')
const mockAPIResponse = require('./mockAPI.js');

const PORT = 8081

// TODO add Configuration to be able to use env variables

var app = express();
app.use(cors())
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static('dist'));

const apiKey = process.env.API_KEY

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// POST Route
app.post('/api', async function(req, res) {
    let url=req.body.URL;
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${url}&lang=en`)
    const data = await response.json()
    res.send(data)

})
if(process.env.NODE_ENV !=='test'){

    app.listen(PORT, (error) => {
        if (error) throw new Error(error)
        console.log(`Server listening on port ${PORT}!`)
    })
}
module.exports = app;
