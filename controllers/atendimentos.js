const atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get("/atendimentos", (req, res) => {
        atendimento.listar(res)
    })    
    
    app.get("/atendimentos/:id", (req, res) => {
        atendimento.buscaPorId(req.params.id, res)
    })

    app.post('/atendimentos', (req, res) => {
        atendimento.adicionar(req.body, res)
    })
}