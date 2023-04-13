//express
const express = require("express")
const filme = express()
filme.use(express.json())

//model ator
const atorModel = require("../models/ator")

//vincurlo
require("../models/vinculo")

//model filme
const filmeModel = require("../models/filme")

filme.post("/add/filme", function(req, res){
    let filme = req.body.filme

    let ators = req.body.ators
    console.log(ators)

    filmeModel.create({
        filme: filme,
    }).then(async (filme) =>{
        try {
            const atores = []
            for(const atorid of ators){
                console.log(atorid , " id ")
                const Attores = await atorModel.findByPk(atorid)
                if(!Attores){//diferente de null
                    throw `ator não encontrado ${atorid}`
                }

                atores.push(Attores)
            }

            for(const ator of atores){
                await filme.addAtor(ator)
            }

            res.redirect("/all/filmes")
        } catch (error) {
            console.log(error)
        }
    })
})

filme.get("/all/filmes", function(req, res){
    filmeModel.findAll({include: [{model: atorModel}]}).then(function(filmes){
        try {
            res.send(filmes)
        } catch (error) {
            console.log(error)
        }
    })
})

module.exports = filme