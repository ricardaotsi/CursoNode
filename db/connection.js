const mysql = require('mysql')
const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'local',
    password: 'freakcrow',
    database: 'agendaPetshop'
})

module.exports = conexao