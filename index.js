//express
const express = require("express")
const app = express()

//porta servidor
app.listen("8080", function(){
    console.log("rodando")
})

//body-parser
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))

//database
const database = require("./database/dbconnection")
database.authenticate().then(function(){
    try {
        console.log("db conectado/criado")
    } catch (error) {
        console.log("erro db: " + error)
    }
})

//ator rotas
const ator = require("./controllers/ator")
app.post("/add/ator", ator)
app.get("/all/ators", ator)

//filem rotas
const filme = require("./controllers/filme")
app.post("/add/filme", filme)
app.get("/all/filmes", filme)

//vinculo rotas
const vinculo = require("./controllers/vinculo")
app.post("/add/vinculo", vinculo)
app.get("/all/vinculos", vinculo)
app.get("/all/vinculos/:idAtor", vinculo)