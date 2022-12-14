const Router = require('express')
const router = new Router()
const fittingsPosController = require('../controllers/fittingsPosController')


router.post('/',fittingsPosController.create)
router.get('/',fittingsPosController.getAll)
router.put('/',fittingsPosController.update)
router.delete('/:id',fittingsPosController.delete)

module.exports = router