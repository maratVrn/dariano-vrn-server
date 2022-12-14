const uuid = require('uuid') // для генерации уникальных id
const path = require('path')
const ApiError = require('../error/ApiError')

const {Product} = require('../models/models')


class ProductController{
    async create(req,res, next){
        try {
            const {name, price} = req.body
            const {img} = req.files
            let filename = uuid.v4()+".jpg"   // Генерируем уникальное название файла и ставим расширение jpg для картинок
            await img.mv(path.resolve(__dirname, '..', 'static', filename)) // перемещаем файл в паку статик
            const product = await Product.create({name, price, img: filename}) // Создаем запись в базе данных
            return res.json(product)
        } catch (e) {next(ApiError.badRequest(e.message))}

    }
    async getAll(req,res){
        // Получаем все запист
        const products = await Product.findAll()
        res.json(products)
       // return products
    }
    async getOne(req,res){

    }
}

module.exports = new ProductController()