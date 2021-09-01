const atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get("/atendimentos", (req, res) => res.send("Servidor Rodando"))    
    
    app.post('/atendimentos', (req, res) => {
        atendimento.adicionar(req.body, res)
    })
}