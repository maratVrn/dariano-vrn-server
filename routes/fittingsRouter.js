const Router = require('express')
const router = new Router()
const fittingsController = require('../controllers/fittingsController')


router.post('/',fittingsController.create)
router.get('/',fittingsController.getAll)
router.put('/',fittingsController.update)
router.delete('/:id',fittingsController.delete)

module.exports = router