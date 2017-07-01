// const http = require('http')
// const PORT = 8080

// function requestHandler(request, response){
//     console.log(request.url)
//     response.end(request.url)
// }

// const server = http.createServer(requestHandler)

// server.listen(PORT, (error)=>{
//     if(error) throw error
//     console.log('Server up ate port ' + PORT)
// })
// // Trecho acima sobe um servidor na porta 80. so com esse codigo da pra acessar localhost:8080 ou iplocal/8080


const http = require('http')
const fs =require('fs')
const PORT = 8080

function requestHandler(request, response){
    console.log(request.url)
    fs.readFile('index.html', 'utf8', (error, fileContent)=>{
        response.setHeader("Content-Type", "text/html")
        response.end(fileContent)
    })
}

const server = http.createServer(requestHandler)

server.listen(PORT, (error)=>{
    if(error) throw error
    console.log('Server up ate port ' + PORT)
})
// Trecho acima sobe um servidor na porta 80. so com esse codigo da pra acessar localhost:8080 ou iplocal/8080

