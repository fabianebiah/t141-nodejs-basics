const express = require('express')
const router = express.Router()
//leitura do banco - aqui simulado uma resposta
let db =[
    {id: 1, name: "Fabiane Paiva", email:"fabianebiah@gmail.com"},
    {id: 2, name: "Roberto Rodrigues", email:"robertoj@inatel.br"},
    {id: 3, name: "Rennan Ponte", email:"rennan.ponte@gmail.com"}
]

router.get('/', (request, response)=>{
    response.json(db) //encapsula json e envia pro front
})

router.get('/:id',(request, response)=>{
    let subscriber =  db.find(sub =>sub.id == request.params.id)
    if(subscriber){
        response.json(subscriber)
    }
    else{
        response
        .status(404)
        .send('Not found')
    }
})

router.post('/', (request,response)=>{
    let newSubscriber = {
        id: db.length + 1,
        name:request.body.name,
        email:request.body.email
    }
    db.push(newSubscriber)

    response
    .status(201)
    .json(newSubscriber)
})

module.exports = router 