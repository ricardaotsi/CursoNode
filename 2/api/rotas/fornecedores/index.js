const roteador = require('express').Router()
const tabela = require('./tabela')
const Fornecedor = require('./Fornecedor')

roteador.get('/', async (req, res) => {
    const resultados = await tabela.listar()
    res.send(JSON.stringify(resultados))
})

roteador.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const fornecedor = new Fornecedor({id: id})
        await fornecedor.carregar()
        res.send(JSON.stringify(fornecedor))
    } catch (erro) {
        res.send(JSON.stringify({msg: erro.message}))
    }
})

roteador.post('/', async (req, res) => {
    const fornecedor = new Fornecedor(req.body)
    await fornecedor.criar()
    res.send(JSON.stringify(fornecedor))
})

module.exports = roteador