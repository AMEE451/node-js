
const express = require("express")
const cors = require("cors")

const dbConnect = require("./db")
const todo = require("./todo.model")
const isValid = require("./validate")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", async (req, res) => {
    let data = await todo.find()
    res.send(data)
})

app.post("/",isValid, async (req, res) => {
    let data = await todo.create(req.body)
    res.send(data)
})

app.delete("/:id", async (req, res) => {
    let { id } = req.params;
    let data = await todo.findByIdAndDelete(id);
    res.send(data)
})

app.patch("/:id", async (req, res) => {
    let { id } = req.params;
    let data = await todo.findByIdAndUpdate(id, req.body)
    res.send(data)
})

app.listen(3040, () => {
    console.log("server started");
    dbConnect()
})