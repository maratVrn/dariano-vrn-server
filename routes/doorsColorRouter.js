const Router = require('express')
const router = new Router()
const doorsColorsController = require('../controllers/doorsColorController')


router.post('/',doorsColorsController.create)
router.get('/',doorsColorsController.getAll)
router.put('/',doorsColorsController.update)
router.delete('/:id',doorsColorsController.delete)

module.exports = router
