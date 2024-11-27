const isValid = (req, res, next) => {
    let {taskname, description, status } = req.body
    if (!taskname || !description || !status) {
        res.send("Invalid list")
    }
    else {
        next();
    }
}

module.exports = isValid;
