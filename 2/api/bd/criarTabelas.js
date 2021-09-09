const modeloTabela = require('../rotas/fornecedores/tableModel')

modeloTabela
    .sync()
    .then(() => console.log('tabela criada'))
    .catch(console.log)