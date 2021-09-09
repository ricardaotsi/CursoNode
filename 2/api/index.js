const express = require('express')
const roteador = require('./rotas/fornecedores')
const app = express()

app.use(express.json())
app.use('/api/fornecedores', roteador)

app.listen(3000, () => console.log('ON'))