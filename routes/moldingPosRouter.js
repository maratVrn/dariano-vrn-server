const Router = require('express')
const router = new Router()
const moldingPosController = require('../controllers/moldingPosController')


router.post('/',moldingPosController.create)
router.get('/',moldingPosController.getAll)
router.put('/',moldingPosController.update)
router.delete('/:id',moldingPosController.delete)

module.exports = router