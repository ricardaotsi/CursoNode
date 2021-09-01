module.exports = app => {
    app.get("/atendimentos", (req, res) => res.send("Servidor Rodando"))    
    
    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send("Rota atendimento Post")
    })
}