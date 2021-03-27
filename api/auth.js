const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')


module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) { //se não veio o email ou a password significa que nao posso continuar
            return res.status(400).send('Dados incompletos')
        }

        //para que não der erro se o usuario colocar o email em maiuscula ou minuscula
        const user = await app.db('users')
            .whereRaw("LOWER(email) = LOWER(?)", req.body.email)
            .first()

        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err || !isMatch) {
                    return res.status(401).send('A senha informada é inválida')
                } //se a senha que ele colocar nao for igual a senha de login manda um erro 401 dizendo não autorizado


                //se ele passar do primeiro teste acima ele vai para o proximo abaixo \/
                const payload = { id: user.id } //vamos armaezenar o id dentro do token
                res.json({
                    name: user.name,
                    email: user.email,
                    token: jwt.encode(payload, authSecret)
                })
            })
        } else {
            res.status(400).send('Usuário não cadastrado')
        }
    }

    return { signin }
}


//esse modulo serve para comparar(validar) senhas para que o usuario tenha o acesso a partir do token
//podia ter colocado auth.js e user.js no mesmo arquivo, porém é sempre bom separar !!