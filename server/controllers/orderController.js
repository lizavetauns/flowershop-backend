const {Order} = require('../models/models')
const ApiError = require('../error/ApiError');

class orderController{
    async create(req, res){
            const{date_start, date_end_plan, sum_price, status, userId} = req.body       
            const order = await Order.create({date_start, date_end_plan, sum_price, status, userId})
            return res.json(order)
            
    }

    async getall(req, res){
        let {userId} = req.query
        let orders;
        if (!userId){
            orders = await Order.findAll()
        }
        if (userId){
            orders = await Order.findAll({where:{userId}})
        }
        return res.json(orders)
    }

    async getone(req, res){
        const {id} = req.params
        const order = await Order.findOne({where:{id}},)
        return res.json(order)
    }

}


module.exports = new orderController()