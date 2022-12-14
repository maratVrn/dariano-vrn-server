const Router = require('express')
const router = new Router()
const fittingColorsController = require('../controllers/fittingColorController')


router.post('/',fittingColorsController.create)
router.get('/',fittingColorsController.getAll)
router.put('/',fittingColorsController.update)
router.delete('/:id',fittingColorsController.delete)

module.exports = router