const bodyParser = require('body-parser')
const cors = require('cors') //para atender requisições vindas de outras url's

//dentro do app vai te o usuario, a db
module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors({
        origin: '*' //colocando '*' vai permitir que ele venha de qualquer origem
    }))
}



//consign = vai servir pra que a gente consiga centralizar(dentro de index.js o "app") as informações dentro dela
//de tal forma que eu consiga compartilha as informações entre os multiplos modulos do node de uma forma mais simples