const express = require("express")
const jobrouter = express.jobrouter()
const jobController=require("../controller/job.controller")

jobrouter.post("/", jobController.createJob)
jobrouter.get("/", jobController.getAllJobs)
jobrouter.get("/:id", jobController.getJobById)
jobrouter.get("/company/:companyId", jobController.getJobsByCompanyId)
jobrouter.put("/:id", jobController.updateJob)
jobrouter.delete("/:id", jobController.deleteJob)

module.exports = jobrouter;
