const{host,port} = require('./config.js')
const express = require('express')
//parser para o body do http
const bodyParser = require('body-parser')

//setup

const app = express()

//configura pra receber json
app.use(bodyParser.json())
app.use(express.static('public')) //vai para a index.html do public

//publish HTML5 app
//subscriber api
app.use('/api/subscribers', require('./subscriberapi'))

 //server startup
 app.listen(port, ()=> {
     console.log(`Server started at htt://${host}:${port}}`)
 })
