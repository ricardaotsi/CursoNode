const customExpress = require('./config/customExpress')
const conexao = require('./db/connection')
const tables = require('./db/tables')

conexao.connect(erro =>{
    if(erro){
        console.log(erro)
    } else {
        tables.init(conexao)
        const app = customExpress()
        app.listen(3000, () => console.log('servidor rodando'))
    }
})
