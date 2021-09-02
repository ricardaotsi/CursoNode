const moment = require("moment")
const conexao = require("../db/connection")

class Atendimento {
    adicionar(atendimento, res) {
        const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS")
        const data = moment(atendimento.data, "DD/MM/YYYY").format("YYYY-MM-DD HH:MM:SS")
        const dataValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteValido = atendimento.cliente.length >= 5
        const validacoes = [
        {
            nome: "data",
            valido: dataValida,
            msg: "Data deve ser maior que atual",
        },
        {
            nome: "cliente",
            valido: clienteValido,
            msg: "Cliente deve ser mais que 5",
        },
        ]
        const erros = validacoes.filter((campo) => !campo.valido)
        if (erros.length > 0) {
            res.status(400).json(erros)
        } else {
            const atendimentoDatado = { ...atendimento, dataCriacao, data }
            const sql = "insert into atendimentos set ?"
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultados)
                }
            })
        }
    }

    listar(res) {
        const sql = "select * from atendimentos"
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(500).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `select * from atendimentos where id=${id}`
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados[0])
            }
        })
    }
}

module.exports = new Atendimento()
