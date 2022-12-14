const Router = require('express')
const router = new Router()
const clientController = require('../controllers/clientController')
// Создавать клиента может только ADMIN к примеру поэтому пробуем чекать
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), clientController.create)
router.get('/',clientController.getAll)
router.get('/:id',clientController.getOne)
router.put('/',clientController.update)
router.delete('/:id',clientController.delete)

module.exports = router