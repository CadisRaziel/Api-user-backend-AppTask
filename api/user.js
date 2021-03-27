const bcrypt = require('bcrypt-nodejs') //para criptografar a senha


module.exports = app => {
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    const save = (req, res) => {
        obterHash(req.body.password, hash => {
            const password = hash


            //olha a gente acessando o app.db sem importar nada tudo isso graças ao consign 
            app.db('users')
                .insert({ name: req.body.name, email: req.body.email.toLowerCase(), password })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }
    return { save }
}


//nesse modulo vamos salvar o usuario, e criptografar a senha dele !!