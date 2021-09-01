const moment = require('moment')
const conexao = require('../db/connection')

class Atendimento {
    adicionar(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'insert into atendimentos set ?'
        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if(erro) {
                res.json(erro)
            } else {
                res.json(resultados)
            }
        })
    }
}

module.exports = new Atendimento