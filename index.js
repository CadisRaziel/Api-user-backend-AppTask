const express = require('express')
const app = express()
const db = require('./config/db') //knex
const consign = require('consign') //ajuda a carregar todos os modulos
const port = 3000

//consign => ou seja, podemos passar a pasta aqui e ele interpreta tudo que esta dentro dela
//ta jogando o middleware.js no "app"
//sendo assim significa que ele vai saber que sempre que ele for carregar um modulo,
//ele passa o app como parametro para todos os modulos que eu vo carregar a partir do consign
//resumindo quando eu crio uma função e passo 'app' como parametro, dentro da função eu posso acessar 'app.db', 'app.user' sem precisar importar nada nos modulos
consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('/api')
    .then('./config/routes.js')
    .into(app) 

//dentro de app em toda minha aplicação sempre que eu fizer 'app.db' eu vou ter acesso ao knex,
//com isso vou conseguir fazer inserções, alterações, excluções
app.db = db






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