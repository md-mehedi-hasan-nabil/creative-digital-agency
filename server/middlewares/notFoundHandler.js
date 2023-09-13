function notFoundHandler(_req, res) {

    res.status(404).json({
        message: "404 not found."
    })
}

module.exports = notFoundHandler