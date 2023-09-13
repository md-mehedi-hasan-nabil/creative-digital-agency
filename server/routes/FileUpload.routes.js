const express = require("express");
const Response = require("../utils/response");
const upload = require("../middlewares/imageUpload");
const router = express.Router();

router.post("/", upload.single("image"), async function (req, res, next) {
    try {
        res.json(Response.success("File upload successful", req.file))
    } catch (error) {
        next(error)
    }
});

module.exports = router;
