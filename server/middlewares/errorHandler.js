function errorHandler(err, req, res, _next) {
    if (err.status) {
        return res.status(err.status).json({
            message: err.message
        })
    }
    console.log(err)
    res.status(500).json({ error: err?.message ? err.message : "Server error" })
}


module.exports = errorHandler