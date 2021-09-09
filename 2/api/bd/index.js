const sequelize = require('sequelize')
const config = require('config')
const instancia = new sequelize(
    config.get('mysql.bd'),
    config.get('mysql.user'),
    config.get('mysql.pass'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
)

module.exports = instancia