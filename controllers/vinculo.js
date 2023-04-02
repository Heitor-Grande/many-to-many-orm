//express
const express = require("express")
const vinculo = express()

//model ator
const atorModel = require("../models/ator")

//model filme
const filmeModel = require("../models/filme")

//model vinvulo
const vinculoModel = require("../models/vinculo")

vinculo.post("/add/vinculo", function(req, res){
    let id_filme = req.body.id_filme
    let id_ator = req.body.id_ator

    vinculoModel.create({
        id_filmes : id_filme,
        id_ators : id_ator
    }).then(function(){
        try {
            res.redirect("/all/vinculos")
        } catch (error) {
            console.log(error)
        }
    })
})

vinculo.get("/all/vinculos", function(req, res){
    vinculoModel.findAll({include : [{model: filmeModel}, {model: atorModel}]}).then(function(vinculos){
        try {
            res.send(vinculos)
        } catch (error) {
            console.log(error)
        }
    })
})

vinculo.get("/all/vinculos/:idAtor", function(req, res){

    let id_ator = req.params.idAtor

    vinculoModel.findAll({include : [{model: filmeModel}, {model: atorModel, 
    where: {id: id_ator}}]}).then(function(vinculos){
        try {
            res.send(vinculos)
        } catch (error) {
            console.log(error)
        }
    })
})


module.exports = vinculo