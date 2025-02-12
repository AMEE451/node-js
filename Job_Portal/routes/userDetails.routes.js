
const { Router } = require("express");
const details=require('../controller/userDetails.controller')
const routes = Router();

routes.get("/user/:userId", details.getUserDetailsByUserId);
routes.post("/", details.createUser);
routes.patch("/:id", details.updateUser);

module.exports =routes;