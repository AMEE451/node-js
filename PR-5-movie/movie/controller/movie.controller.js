const Movie = require("../model/movie.schema")

const createmovie = async (req, res) => {
    try {
        let movie = await Movie.create(req.body)
        res.status(201).json(movie)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

const getmovie = async (req, res) => {
    try {
        let movie = await Movie.find()
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

const Delete = async (req, res) => {
    try {
        let { id } = req.params
        let movie = await Movie.findByIdAndDelete(id)
        res.status(201).json(movie)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

const updatemovie = async (req, res) => {
    try {
        let { id } = req.params
        let {rating}=req.body
        let updatedmovie = await Movie.findByIdAndUpdate(id, req.body, { key: true })
        res.status(202).json(updatedmovie)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

const updaterating = async (req, res) => {
    try {
        let { id } = req.params
        let {comment}=req.body
        let ratings = await Movie.findByIdAndUpdate(id, { ratings: Number }, { new: true })
        res.status(202).json(ratings)
    } catch (error) {
        res.status(500).json({ error: "movie not found" })
    }
}

const updatecomment = async (req, res) => {
    try {
        let { id } = req.params
        let comments = await Movie.findByIdAndUpdate(is, { comments: "good" }, { key: true })
        res.status(202).json(comments)
    } catch (error) {
        res.status(500).json({ error: "movie not found" })
    }
}

module.exports = { createmovie, getmovie, Delete, updatemovie, updaterating, updatecomment }
