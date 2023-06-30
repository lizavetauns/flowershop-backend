const Router=require('express')
const router = new Router()
const bouqueRouter = require('./bouqueRouter')
const orderRouter = require('./orderRouter')
const prInBouqRouter = require('./prInBouqRouter')
const product_in_orderRouter = require('./product_in_orderRouter')
const productRouter = require('./productRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')


router.use('/bouque', bouqueRouter)
router.use('/order', orderRouter)
router.use('/product_in_bouquet', prInBouqRouter)
router.use('/product_in_order', product_in_orderRouter)
router.use('/product', productRouter)
router.use('/type', typeRouter)
router.use('/user', userRouter)

module.exports = router