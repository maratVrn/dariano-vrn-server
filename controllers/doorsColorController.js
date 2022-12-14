const {DoorsColors} = require("../models/models");
const ApiError = require("../error/ApiError");


class DoorsColorController{
    async create(req,res, next){
        try {
            const {color} = req.body
            const dColor = await DoorsColors.create({color}) // Создаем запись в базе данных
            return res.json(dColor)
        } catch (e) { next(ApiError.badRequest(e.message))}
    }
    async getAll(req,res){
        try {
            const dColors = await DoorsColors.findAll()
            dColors.sort((a, b) => a.id > b.id ? 1 : -1)
            return res.json(dColors)
        }  catch (e) {(ApiError.badRequest(e.message))}
    }

    async update(req,res){
        try {
            const dColor = req.body
            if (!dColor.id){
                res.status(400).json({message: 'Id не указан'})
            }
            const updatedDColor = await DoorsColors.update(dColor, {
                where: {id: dColor.id}
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
            const order = await DoorsColors.destroy({where: {id: id}})
            res.json(order)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new DoorsColorController()