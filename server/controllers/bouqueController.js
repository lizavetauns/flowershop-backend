const {Bouquet} = require('../models/models')
const ApiError = require('../error/ApiError');

class bouqueController{
    async create(req, res){
        try{
            const{price, comment, quantity, orderId} = req.body
            const bouquet = await Bouquet.create({price, comment, quantity, orderId})
           
            return res.json(bouquet)
            }
        catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getall(req, res){
        let {orderId} = req.query
        let bouquets;
        if (!orderId){
            bouquets = await Bouquet.findAll()
        }
        if (orderId){
            bouquets = await Bouquet.findAll({where:{orderId}})
        }
        return res.json(bouquets)
    }

    async getone(req, res){
        const {id} = req.params
        const bouquet = await Bouquet.findOne({where:{id}},)
        return res.json(bouquet)
    }

}


module.exports = new bouqueController()