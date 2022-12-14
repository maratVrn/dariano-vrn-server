const Router = require('express')
const router = new Router()
const modernModelController = require('../controllers/modernModelController')


router.post('/',modernModelController.create)
router.get('/',modernModelController.getAll)
router.put('/',modernModelController.update)
router.delete('/:id',modernModelController.delete)

module.exports = router