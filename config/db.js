const config = require('../knexfile.js')//nesse arquivo o 'config' tem a configuração de conexão do banco de dados e passamos ele para iniciar o knex
const knex = require('knex')(config)


//aqui estartamos a migration direto do codigo \/   
knex.migrate.latest([config]) //quando tivermos um app com muitos muitos acessos não podemos colocar essa linha de codigo
module.exports = knex

//nesse arquivo o 'config' tem a configuração de conexão do banco de dados