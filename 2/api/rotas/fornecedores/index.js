const roteador = require('express').Router()
const tabela = require('./tabela')
const Fornecedor = require('./Fornecedor')

roteador.get('/', async (req, res) => {
    const resultados = await tabela.listar()
    res.send(JSON.stringify(resultados))
})

roteador.post('/', async (req, res) => {
    const fornecedor = new Fornecedor(req.body)
    await fornecedor.criar()
    res.send(JSON.stringify(fornecedor))
})

module.exports = roteador