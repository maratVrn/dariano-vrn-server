const Router = require('express')
const userRouter = require('./userRouter')
const clientRouter= require('./clientRouter')
const orderRouter= require('./orderRouter')
const productRouter= require('./productRouter')
const doorsColorRouter= require('./doorsColorRouter')
const fittingColorRouter= require('./fittingColorRouter')
const doorsRouter= require('./doorsRouter')
const classicModelRouter= require('./classicModelRouter')
const neoClassicModelRouter= require('./neoClassicModelRouter')
const modernModelRouter= require('./modernModelRouter')
const moldingsRouter= require('./moldingsRouter')
const moldingsPosRouter= require('./moldingPosRouter')
const fittingsRouter= require('./fittingsRouter') //
const fittingBrandsRouter= require('./fittingBrandsRouter')//
const fittingsPosRouter= require('./fittingsPosRouter')//

const router = new Router()

router.use('/user', userRouter)
router.use('/client', clientRouter)
router.use('/orders', orderRouter)
router.use('/product', productRouter)
router.use('/doorsColor', doorsColorRouter)
router.use('/fittingColor', fittingColorRouter)
router.use('/doors', doorsRouter)
router.use('/classicModel', classicModelRouter)
router.use('/neoClassicModel', neoClassicModelRouter)
router.use('/modernModel', modernModelRouter)
router.use('/moldings', moldingsRouter)
router.use('/moldingPos', moldingsPosRouter)
router.use('/fittings', fittingsRouter)
router.use('/fittingsPos', fittingsPosRouter)
router.use('/fittingBrands', fittingBrandsRouter)

module.exports = router

