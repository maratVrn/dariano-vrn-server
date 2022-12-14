const jwt = require('jsonwebtoken')

module.exports = function (req, res, next){

    if (req.method === "OPTIONS"){
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        // console.log('1: Получили токен в запросе')
        // console.log(token)

        if (!token){
            return res.status(401).json({message:"Пользователь не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        // console.log('2: декодировали на сервере данные пользователя ')
        // console.log(decoded)
        req.user = decoded
        next()

    } catch (e){
        res.status(401).json({message:"Пользователь не авторизован"})
    }
}