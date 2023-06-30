const {Type_product} = require('../models/models')
const ApiError = require('../error/ApiError');

class typeController{
    async create(req, res){
        try{
        const{name}=req.body
        const type = await Type_product.create({name})
        return res.json({type})
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getall(req, res){
        const types = await Type_product.findAll()
        return res.json(types)
    }

    async getone(req, res){
        const {id} = req.params
        const type = await Type_product.findOne({where:{id}},)
        return res.json(type)
    }

}


module.exports = new typeController()