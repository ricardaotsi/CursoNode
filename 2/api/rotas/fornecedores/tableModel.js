const sequelize = require('sequelize')
const instancia = require('../../bd')
const colunas = {
    empresa: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    }
}
const opcoes = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('fornecedor', colunas, opcoes)