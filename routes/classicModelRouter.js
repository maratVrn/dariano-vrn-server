const Router = require('express')
const router = new Router()
const classicModelController = require('../controllers/classicModelController')


router.post('/',classicModelController.create)
router.get('/',classicModelController.getAll)
router.put('/',classicModelController.update)
router.delete('/:id',classicModelController.delete)

module.exports = router