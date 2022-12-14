const Router = require('express')
const router = new Router()
const moldingsController = require('../controllers/moldingsController')


router.post('/',moldingsController.create)
router.get('/',moldingsController.getAll)
router.put('/',moldingsController.update)
router.delete('/:id',moldingsController.delete)

module.exports = router