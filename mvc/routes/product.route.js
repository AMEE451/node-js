
const { Router } = require("express")
const { postproduct, getproduct, getproductbyuserId } = require("../controller/product.controller")

const productRouter = Router()

productRouter.post("/", postproduct)
productRouter.get("/", getproduct)
productRouter.get("/:userId", getproductbyuserId)

module.exports = productRouter
