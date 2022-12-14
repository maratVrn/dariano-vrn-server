const {Doors} = require("../models/models");
const ApiError = require("../error/ApiError");
const {DataTypes} = require("sequelize");


class DoorsController{
    async create(req,res, next){
        try {
            const {collection, name, color, glass, price, comment} = req.body
            const door = await Doors.create({collection, name, color, glass, price, comment}) // Создаем запись в базе данных
            return res.json(door)
        } catch (e) { next(ApiError.badRequest(e.message))}
    }
    async getAll(req,res){
        try {

            // const {collection} = req.params
            // console.log(req.collection);
            // console.log(req.body);
            // console.log(collection);
            // const doors = await Doors.findAll({where: {collection: dCollection, name : dModel}})
          //  const doors = await Doors.findAll({where: {collection: dCollection}})
            const doors = await Doors.findAll()
            doors.sort((a, b) => a.id > b.id ? 1 : -1)
            return res.json(doors)
        }  catch (e) {console.log(e.message); (ApiError.badRequest(e.message))}
    }

    async update(req,res){
        try {
            const door = req.body
            if (!door.id){
                res.status(400).json({message: 'Id не указан'})
            }
            const updatedDoor = await Doors.update(door, {
                where: {id: door.id}
            })

            res.json(updatedDoor)
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
            const door = await Doors.destroy({where: {id: id}})
            res.json(door)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new DoorsController()