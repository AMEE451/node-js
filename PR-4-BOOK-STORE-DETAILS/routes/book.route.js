const Router=require("express")
const {getbook,getbookbyid, addbook, updatebook, deletebook, getStore} = require("../controller/book.controller")
const bookRouter=Router()

bookRouter.get("/",getStore)
bookRouter.get("books",getbook)
bookRouter.get("books/book/:id",getbookbyid)
bookRouter.post("books/addbook",addbook)
bookRouter.patch("books/update/:id",updatebook)
bookRouter.delete("books/delete/:id",deletebook)

module.exports=bookRouter
// aabhu7164ca
