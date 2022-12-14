const {MoldingsPos} = require("../models/models");
const ApiError = require("../error/ApiError");


class MoldingPosController{
    async create(req,res, next){
        try {
            const {moldingType, price, color, comment} = req.body
            const dModel = await MoldingsPos.create({moldingType, price, color, comment}) // Создаем запись в базе данных
            return res.json(dModel)
        } catch (e) { next(ApiError.badRequest(e.message))}
    }
    async getAll(req,res){
        try {
            const dMolding = await MoldingsPos.findAll()
            dMolding.sort((a, b) => a.id > b.id ? 1 : -1)
            return res.json(dMolding)
        }  catch (e) {(ApiError.badRequest(e.message))}
    }

    async update(req,res){
        try {
            const dMolding = req.body
            if (!dMolding.id){
                res.status(400).json({message: 'Id не указан'})
            }
            const updatedDColor = await MoldingsPos.update(dMolding, {
                where: {id: dMolding.id}
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
            const dMolding = await MoldingsPos.destroy({where: {id: id}})
            res.json(dMolding)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new MoldingPosController()