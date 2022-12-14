const {NeoClassicModels} = require("../models/models");
const ApiError = require("../error/ApiError");


class NeoClassicModelController{
    async create(req,res, next){
        try {
            const {model} = req.body
            const dModel = await NeoClassicModels.create({model}) // Создаем запись в базе данных
            return res.json(dModel)
        } catch (e) { next(ApiError.badRequest(e.message))}
    }
    async getAll(req,res){
        try {
            const dColors = await NeoClassicModels.findAll()
            dColors.sort((a, b) => a.id > b.id ? 1 : -1)
            return res.json(dColors)
        }  catch (e) {(ApiError.badRequest(e.message))}
    }

    async update(req,res){
        try {
            const dModel = req.body
            if (!dModel.id){
                res.status(400).json({message: 'Id не указан'})
            }
            const updatedDColor = await NeoClassicModels.update(dModel, {
                where: {id: dModel.id}
            })

            res.json(updatedDColor)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req,res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const order = await NeoClassicModels.destroy({where: {id: id}})
            res.json(order)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new NeoClassicModelController()