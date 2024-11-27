const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: String,
    price: String,
    image: String,
    userId: String
})

const Product = mongoose.model("Product", productSchema)
module.exports = Product