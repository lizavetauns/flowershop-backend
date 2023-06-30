const Router=require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/', orderController.create)   //создание
router.get('/', orderController.getall)
router.get('/:id', orderController.getone)  //получение

module.exports = router