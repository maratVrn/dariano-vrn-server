const Router = require('express')
const router = new Router()
const fittingBrandsController = require('../controllers/fittingBrandsController')


router.post('/',fittingBrandsController.create)
router.get('/',fittingBrandsController.getAll)
router.put('/',fittingBrandsController.update)
router.delete('/:id',fittingBrandsController.delete)

module.exports = router