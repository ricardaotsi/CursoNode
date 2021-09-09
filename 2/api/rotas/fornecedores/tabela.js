const modelo = require('./tableModel')

module.exports = {
    listar() {
        return modelo.findAll()
    },

    inserir(fornecedor) {
        return modelo.create(fornecedor)
    }
}