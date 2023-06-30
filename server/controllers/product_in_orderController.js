const {Product_in_Order} = require('../models/models')
const ApiError = require('../error/ApiError');

class prInOrdController{
    async create(req, res){
            const{quantity, orderId, productId} = req.body
            const prInOrd = await Product_in_Order.create({quantity, orderId, productId})
           
            return res.json(prInOrd)
    }

    async getall(req, res){
        let {orderId, productId} = req.query
        let prInOrds;
        if (!orderId && !productId) {
            prInOrds = await Product_in_Order.findAll()
        }
        if (orderId && !productId) {
            prInOrds = await Product_in_Order.findAll({where:{orderId}})
        }
        if (!orderId && productId) {
            prInOrds = await Product_in_Order.findAll({where:{productId}})
        }
        if (orderId && productId) {
            prInOrds = await Product_in_Order.findAll({where:{productId, orderId}})
        }
        return res.json(prInOrds)
    }

    async getone(req, res){
        const {id} = req.params
        const prInOrd = await Product_in_Order.findOne({where:{id}},)
        return res.json(prInOrd)
    }

}


module.exports = new prInOrdController()