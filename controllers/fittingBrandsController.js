const {FittingBrands} = require("../models/models");
const ApiError = require("../error/ApiError");


class FittingBrandsController{
    async create(req,res, next){
        try {
            const {brand} = req.body
            const dFitting = await FittingBrands.create({brand}) // Создаем запись в базе данных
            return res.json(dFitting)
        } catch (e) { next(ApiError.badRequest(e.message))}
    }
    async getAll(req,res){
        try {
            const dFittings = await FittingBrands.findAll()
            dFittings.sort((a, b) => a.id > b.id ? 1 : -1)
            return res.json(dFittings)
        }  catch (e) {(ApiError.badRequest(e.message))}
    }

    async update(req,res){
        try {
            const dFitting = req.body
            if (!dFitting.id){
                res.status(400).json({message: 'Id не указан'})
            }
            const updatedFitting = await FittingBrands.update(dFitting, {
                where: {id: dFitting.id}
            })

            res.json(updatedFitting)
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
            const fitting = await FittingBrands.destroy({where: {id: id}})
            res.json(fitting)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new FittingBrandsController()