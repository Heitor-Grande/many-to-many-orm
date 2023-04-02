const sequelize = require("sequelize")
const database = new sequelize({
    dialect: "sqlite",
    storage: "./database/vinculo.db"
})

module.exports = database