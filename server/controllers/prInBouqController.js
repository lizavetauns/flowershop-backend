const {Product_in_Bouquet} = require('../models/models')
const ApiError = require('../error/ApiError');

class prInBouqController{
    async create(req, res){
        try{
            const{quantity, bouquetId, productId} = req.body
            const prInBouq = await Product_in_Bouquet.create({quantity, bouquetId, productId})
           
            return res.json(prInBouq)
            }
        catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getall(req, res){
        let {bouquetId, productId} = req.query
        let prInBouqs;
        if (!bouquetId && !productId) {
            prInBouqs = await Product_in_Bouquet.findAll()
        }
        if (bouquetId && !productId) {
            prInBouqs = await Product_in_Bouquet.findAll({where:{bouquetId}})
        }
        if (!bouquetId && productId) {
            prInBouqs = await Product_in_Bouquet.findAll({where:{productId}})
        }
        if (bouquetId && productId) {
            prInBouqs = await Product_in_Bouquet.findAll({where:{productId, bouquetId}})
        }
        return res.json(prInBouqs)
    }

    async getone(req, res){
        const {id} = req.params
        const prInBouq = await Product_in_Bouquet.findOne({where:{id}},)
        return res.json(prInBouq)
    }

}


module.exports = new prInBouqController()