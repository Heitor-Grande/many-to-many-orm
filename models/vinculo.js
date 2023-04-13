//sequelize
const sequelize = require("sequelize")

//database
const database = require("../database/dbconnection")

//ators
const ator = require("./ator")

//filme
const filme = require("./filme")

const vinculo = "ator_filme"

filme.belongsToMany(ator, {
    through: vinculo
})

ator.belongsToMany(filme, {
    through: vinculo
})

database.sync()