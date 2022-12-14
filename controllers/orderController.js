const {Order} = require("../models/models");
const ApiError = require("../error/ApiError");


class OrderController{
    async create(req,res, next){
        try {
            const {date, status, sum, clientId, doorDiscount, doorSum, moldingDiscount, moldingSum,
                fittingDiscount, fittingSum, comment, fittingData, moldingData, doorData} = req.body

            const order = await Order.create({date, status, sum, clientId, doorDiscount, doorSum, moldingDiscount, moldingSum,
                fittingDiscount, fittingSum, comment, fittingData, moldingData, doorData}) // Создаем запись в базе данных
            return res.json(order)
        } catch (e) {
            console.log(e.message);
            next(ApiError.badRequest(e.message))}
    }
    async getAll(req,res){
        try {
            const orders = await Order.findAll()
            return res.json(orders)
        }  catch (e) {(ApiError.badRequest(e.message))}
    }

    async update(req,res){
        try {
            const order = req.body
            if (!order.id){

                res.status(400).json({message: 'Id не указан'})
            }
            const updatedOrder = await Order.update(order, {
                where: {id: order.id}
            })
            res.json(updatedOrder)

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
            const order = await Order.destroy({where: {id: id}})
            res.json(order)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req,res){
        const {id} = req.params
        if (id) {
            try {
                const orders = await Order.findAll({where: {clientId: id}})
                return res.json(orders)
            } catch (e) {{ApiError.badRequest(e.message)}
            }
        } else return res.json('Не указан ID клиента')

    }
}

module.exports = new OrderController()