//sequelize
const sequelize = require("sequelize")

//database
const database = require("../database/dbconnection")

//filme
const filme = database.define("filmes", {
    filme: {
        type: sequelize.TEXT
    }
})

module.exports = filme