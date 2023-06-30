const Router=require('express')
const router = new Router()
const prInBouqController = require('../controllers/prInBouqController')

router.post('/', prInBouqController.create)   //создание
router.get('/', prInBouqController.getall)
router.get('/:id', prInBouqController.getone)  //получение

module.exports = router