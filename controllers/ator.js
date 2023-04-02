//express
const express = require("express")
const ator = express()

//model ator
const atorModel = require("../models/ator")

ator.post("/add/ator", function(req, res){
    let nome = req.body.nome

    atorModel.create({
        nome: nome
    }).then(function(){
        try {
            res.redirect("/all/ators")
        } catch (error) {
            console.log(error)
        }
    })

})

ator.get("/all/ators", function(req, res){
    atorModel.findAll().then(function(ators){
        try {
            res.send(ators)
        } catch (error) {
            console.log(error)
        }
    })
})

module.exports = ator