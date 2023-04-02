//sequelize
const sequelize = require("sequelize")

//database
const database = require("../database/dbconnection")

//filme
const ator = database.define("ators", {
    nome: {
        type: sequelize.TEXT
    }
})

module.exports = ator