const ApiError = require("../error/ApiError");
const {Client} = require("../models/models");
const {where} = require("sequelize");

class ClientController{
    async create(req,res){
        try {
            const {surname, name, secondName,  passport, managerId, designerId,
                startDate, passportGet, contract, contact, address, comment, oooName, oooDirFio, oooDirTitle,
                oooInn, oooKpp, oooBuh, userId} = req.body
            // Создаем запись в базе данных
            const client = await Client.create({surname, name, secondName,  passport, managerId, designerId,
                startDate, passportGet, contract, contact, address, comment, oooName, oooDirFio, oooDirTitle,
                oooInn, oooKpp, oooBuh, userId})
            res.json(client)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }


    async getAll(req,res){
        try {
            // Получаем все запист
            const clients = await Client.findAll()
            clients.sort((a, b) => a.id > b.id ? -1 : 1)
            res.json(clients)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getOne(req,res){
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const client = await Client.findByPk(id)
            res.json(client)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req,res){
        try {
             const client = req.body
             if (!client.id){
                 res.status(400).json({message: 'Id не указан'})
             }
            const updatedClient = await Client.update(client, {
                where: {id: client.id}
            })
            res.json(updatedClient)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req,res){
        try {
        const {id} = req.params
        if (!id) {
            res.status(400).json({message: 'Id не указан'})
        }
        const client = await Client.destroy({where: {id: id}})
        res.json(client)
    } catch (e) {
        res.status(500).json(e)
    }
    }

}

module.exports = new ClientController()