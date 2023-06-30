const Router=require('express')
const router = new Router()
const bouqueController = require('../controllers/bouqueController')

router.post('/', bouqueController.create)   //создание
router.get('/', bouqueController.getall)
router.get('/:id', bouqueController.getone)  //получение

module.exports = router