const Router=require('express')
const router = new Router()
const product_in_orderController = require('../controllers/product_in_orderController')

router.post('/', product_in_orderController.create)   //создание
router.get('/', product_in_orderController.getall)
router.get('/:id', product_in_orderController.getone)  //получение

module.exports = router