//express
const express = require("express")
const filme = express()

//model filme
const filmeModel = require("../models/filme")

filme.post("/add/filme", function(req, res){
    let filme = req.body.filme

    filmeModel.create({
        filme: filme
    }).then(function(){
        try {
            res.redirect("/all/filmes")
        } catch (error) {
            console.log(error)
        }
    })

})

filme.get("/all/filmes", function(req, res){
    filmeModel.findAll().then(function(filmes){
        try {
            res.send(filmes)
        } catch (error) {
            console.log(error)
        }
    })
})

module.exports = filme