//sequelize
const sequelize = require("sequelize")

//database
const database = require("../database/dbconnection")

//ators
const ator = require("./ator")

//filme
const filme = require("./filme")

//vinculo
const vinculo = database.define("vinculos", {
})

vinculo.belongsTo(ator, {
    foreignKey: "id_ators"
})

vinculo.belongsTo(filme, {
    foreignKey: "id_filmes"
})

module.exports = vinculo