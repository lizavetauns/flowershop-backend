require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/app')
const errorHandler=require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const appe = express()
appe.use(cors())
appe.use(express.json())
appe.use(express.static(path.resolve(__dirname, 'static')))
appe.use(fileUpload({}))
appe.use('/api', router)


appe.use(errorHandler)


const start = async () =>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        appe.listen(PORT, () => console.log('Server started on port', PORT))
    }
    catch (e){
        console.log(e)
    }
}

start()


