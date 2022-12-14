const {FittingsPos} = require("../models/models");
const ApiError = require("../error/ApiError");


class FittingsPosController{
    async create(req,res, next){
        try {
            const {fitting, brand, pos, price} = req.body
            const dFitting = await FittingsPos.create({fitting, brand, pos, price}) // Создаем запись в базе данных
            return res.json(dFitting)
        } catch (e) { next(ApiError.badRequest(e.message))}
    }
    async getAll(req,res){
        try {
            const dFittings = await FittingsPos.findAll()
            dFittings.sort((a, b) => a.id > b.id ? 1 : -1)
            return res.json(dFittings)
        }  catch (e) {(ApiError.badRequest(e.message))}
        // }  catch (e) {console.log(e.message)}

        }

    async update(req,res){
        try {
            const dFitting = req.body
            if (!dFitting.id){
                res.status(400).json({message: 'Id не указан'})
            }
            const updatedFitting = await FittingsPos.update(dFitting, {
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
            const fitting = await FittingsPos.destroy({where: {id: id}})
            res.json(fitting)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new FittingsPosController()