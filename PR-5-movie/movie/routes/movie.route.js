const Router=require("express")
const { createmovie, getmovie, updatemovie, updaterating, updatecomment, Delete } = require("../controller/movie.controller")

const movieRouter=Router()
movieRouter.post("/movie/create",createmovie)
movieRouter.get("/",getmovie)
movieRouter.patch("/movie/update/:id",updatemovie)
movieRouter.patch("/movie/rating/:id",updaterating)
movieRouter.patch("/movie/comment/:id",updatecomment)
movieRouter.delete("/movie/delete/:id",Delete)

module.exports=movieRouter