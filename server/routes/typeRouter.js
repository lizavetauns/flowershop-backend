const Router=require('express')
const router = new Router()
const typeController = require('../controllers/typeController')

router.post('/', typeController.create)
router.get('/', typeController.getall)
router.get('/:id', typeController.getone)  //получение

module.exports = router