const Product = require("../model/product.model")

const postproduct = async (req, res) => {
    let data = await Product.create(req.body)
    res.send(data)
}

const getproduct = async (req, res) => {
    let data = await Product.find()
    res.send(data)
}

const getproductbyuserId = async (req, res) => {
    let { userId } = req.params;
    let data = await Product.find({ userId })
    res.send(data)  
}

module.exports = { getproduct, postproduct, getproductbyuserId }