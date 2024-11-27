const Product = require("../model/product.model")

const getproduct = async (req, res) => {
    try {
        let data = await Product.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ err: error.message })
    }
}

const postproduct = async (req, res) => {
    try {
        let data = await Product.create(req.body)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ err: error.message })
    }
}

const getproductbyuserId = async (req, res) => {
    try {
        let { userId } = req.params;
        let data = await Product.find({ userId })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ err: error.message })
    }
}

const deleteproduct = async(req, res) => {
    try {
        let { id } = req.params;
        let data = await Product.findByIdAndDelete(id);
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ err: error.message })
    }
}

const updateproduct = async(req, res) => {
    try {
        let { id } = req.params;
        let data = await Product.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ err: error.message })
    }
}


module.exports = { getproduct, postproduct, getproductbyuserId, deleteproduct, updateproduct }