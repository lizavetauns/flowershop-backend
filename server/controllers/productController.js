const uuid = require('uuid')
const path = require('path');
const {Product} = require('../models/models')
const ApiError = require('../error/ApiError');

class productController{
    async create(req, res){
        try{
        const{name, price, about, quantity, typeProductId} = req.body
        const {img} = req.files
        let fileName = uuid.v4()+".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
        const product = await Product.create({name, price, about, quantity, typeProductId, img: fileName})
        return res.json(product)
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getall(req, res){
        let {typeProductId, limit, page} = req.query
        page = page || 1
        limit = limit || 16
        
        let offset = page * limit - limit
        let products;
        if (!typeProductId){
            products = await Product.findAndCountAll({limit, offset})
        }
        if (typeProductId){
            products = await Product.findAndCountAll({where:{typeProductId}, limit, offset})
        }
        return res.json(products)
        
    }

    async getone(req, res){
        const {name} = req.params
        const product = await Product.findOne({where:{name}},)
        return res.json(product)
    }

}


module.exports = new productController()