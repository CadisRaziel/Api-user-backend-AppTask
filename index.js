const express = require('express')
const app = express()
const port = 3000




app.listen(port, function (erro) {
    if (erro) {
        console.log("Connection error!")
    } else {
        console.log(`The server is running on the port ${port}`)
    }
})





// const bodyParser = require('body-parser')

//aqui temos uma função middleware dentro dele que vai ser aplicado a qualquer url da nossa aplicação
// app.use(bodyParser.json())

//req, res, next = NEXT serve para que chame uma proxima função
//exemplo se eu tenho duas funções com o mesmo caminho '/' se eu nao colocar o next a segunda função não sera chamada
//no final coloque um next como na function abaixo
// app.get('/', (req, res, next) => {
    //     res.status(200).send('Meu backend!')
//     next()
// })