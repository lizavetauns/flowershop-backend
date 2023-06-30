const sequelize = require('../db')
const {DataTypes}=require('sequelize')

const Type_product = sequelize.define('type_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio: {type: DataTypes.STRING, allowNull: false},
    num_phone: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Bouquet = sequelize.define('bouquet', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},   
    price: {type: DataTypes.DECIMAL, allowNull: false},
    comment: {type: DataTypes.STRING},
    quantity: {type: DataTypes.INTEGER, allowNull: false}
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},   
    date_start: {type: DataTypes.DATE, allowNull: false},
    date_end_plan: {type: DataTypes.DATE},
    sum_price: {type: DataTypes.INTEGER, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false}
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},     
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    about: {type: DataTypes.STRING},
    quantity: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Product_in_Order = sequelize.define('product_in_order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},  
    quantity: {type: DataTypes.INTEGER, allowNull: false}
})

const Product_in_Bouquet = sequelize.define('product_in_bouquet', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},     
    quantity: {type: DataTypes.INTEGER, allowNull: false}
})


Type_product.hasMany(Product)
Product.belongsTo(Type_product)

User.hasMany(Order)
Order.belongsTo(User)

Order.hasMany(Bouquet)
Bouquet.belongsTo(Order)

Bouquet.hasMany(Product_in_Bouquet)
Product_in_Bouquet.belongsTo(Bouquet)

Product.hasOne(Product_in_Bouquet)
Product_in_Bouquet.belongsTo(Product)

Order.hasMany(Product_in_Order)
Product_in_Order.belongsTo(Order)

Product.hasOne(Product_in_Order)
Product_in_Order.belongsTo(Product)

module.exports ={
    Type_product,
    User,
    Bouquet,
    Order,
    Product,
    Product_in_Order,
    Product_in_Bouquet
}