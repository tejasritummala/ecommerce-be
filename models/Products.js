const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
    productId: String,
    name: String,
    description: String,
    price: String,
    category: String,
    stockQuantity: Number,
    image: Array
})

const ProductsModel =  mongoose.model("products", ProductsSchema, "products");
module.exports = ProductsModel;