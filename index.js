require('dotenv').config()  // Пакет для использования переменных окруженя .env

const express = require('express')
const sequelize = require('./db')          // Библиотека для работы с БД
const models = require('./models/models')   // модель базы данных
const cors = require('cors')               // для отправки запросов из браузера
const fileUpload = require('express-fileupload') // Для загрузки файлов на сервер
const PORT = process.env.PORT || 5200
const router = require('./routes/index')   //  Импортируем основной роутер
const errorHandler = require('./middleware/ErrorHandlingMiddleware')  // Промежуточный слой обработки ошибок
const path = require('path')



const app = express()
app.use(cors())          // подключаем использование cors
app.use(express.json())  // чтобы приложение могло парсить json формат
app.use(express.static(path.resolve(__dirname, 'static'))) // Чтобы файлы с сервера можно было явно просматривать с запроса \файлнэйм
app.use(fileUpload({}))  // Для загрузки файлов на сервер
app.use('/api', router)  // все запросы через ключ слово api потом команды роутеру

// Обязательно вконце т.к. последний middleWare работа прекращается возвращаем ошибку
app.use(errorHandler)

const start = async () =>{
    try {
        // Подключаемся к БД
        await sequelize.authenticate()
        await sequelize.sync()
        // Запускаем приложение
        app.listen(PORT, ()=> console.log(`Server is start ${PORT}`))
      //  app.get('/', (req, res)=>{res.status(200).json({message: 'its working!!222!'}) })
    } catch (e){
        console.log(e)
    }
}


start().then()


