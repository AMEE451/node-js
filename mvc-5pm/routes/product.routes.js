const Router = require("express")
const { getproduct, postproduct, getproductbyuserId, deleteproduct, updateproduct } = require("../controller/product.controller")

const productRouter = Router()

productRouter.get("/", getproduct)
productRouter.post("/", postproduct)
productRouter.get("/:userId", getproductbyuserId)
productRouter.delete("/:id", deleteproduct)
productRouter.patch("/:id", updateproduct)

module.exports=productRouter