const Router=require('express')
const router = new Router()
const productController = require('../controllers/productController')
//const checkRole = require('../middleware/checkRoleMiddleware')

//router.post('/', checkRole('ADMIN') ,productController.create)   //создание
router.post('/', productController.create)   //создание
router.get('/', productController.getall)
router.get('/:name', productController.getone)  //получение

module.exports = router