const Router = require('express')
const router = new Router()
const doorsController = require('../controllers/doorsController')


router.post('/',doorsController.create)
router.get('/',doorsController.getAll)
router.put('/',doorsController.update)
router.delete('/:id',doorsController.delete)

module.exports = router