const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')      // Для хеширования паролей чтобы не хранить их в БД в открытом виде
const jwt = require('jsonwebtoken')   // Для генерации json веб токена
const {User} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign( {id: id, email, role},
                    process.env.SECRET_KEY,
                   {expiresIn: '24h'},{} )
    }

class UserController{
    async registration(req,res,next){
        // const {email, password, role, name} = req.body
        const {email, password} = req.body
        if (!email || !password){
            return next(ApiError.badRequest('Неккоректный емайл или пароль'))
        }
        const candidate = await User.findOne( {where: {email}} )
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким емайл уже сущетсвует'))
        }

        // Хэешируем пароль полтзователя - будем хранить его в хэш виде
        const hashPassword = await bcrypt.hash(password,5)
        // Создаем пользователя в базе данных
        const user = await User.create({email, password: hashPassword})
        console.log(user)
        // Генерируем jwt токен
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req,res, next){
        const {email, password} = req.body
        const user = await User.findOne({where:{email}})
        if (!user){
            return next(ApiError.internal('Такого пользователя не существует'))
        }
        // Сравниваем пароли что передали и что в БД (НО в БД он захеширован поэтому через функцию compareSync

        let truePassword = bcrypt.compareSync(password, user.password)
        if (!truePassword){
            return next(ApiError.internal('Неверный пароль пользователя'))
        }
        // Генериуем токен
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req,res,next){
        // Генерируем новый токен и отправляем его обратно на клиент
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        // console.log('3. Дошли до функции check, генерируем новый токен')
        // console.log(token)
        return res.json({token})

    }
}

module.exports = new UserController()