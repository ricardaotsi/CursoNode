const modelo = require('./tableModel')

module.exports = {
    listar() {
        return modelo.findAll()
    },

    inserir(fornecedor) {
        return modelo.create(fornecedor)
    },

    async pegarPorId(id){
        const encontrado = await modelo.findOne({
            where: {
                id: id
            }
        })
        if(!encontrado){
            throw new Error('não encontrado')
        }
        return encontrado
    }
}