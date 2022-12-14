const Router = require('express')
const router = new Router()
const neoClassicModelController = require('../controllers/neoClassicModelController')


router.post('/',neoClassicModelController.create)
router.get('/',neoClassicModelController.getAll)
router.put('/',neoClassicModelController.update)
router.delete('/:id',neoClassicModelController.delete)

module.exports = router