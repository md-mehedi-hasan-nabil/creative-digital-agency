const express = require("express");
const { getComments, getComment, addComment, updateComment, removeComment } = require("../controllers/Comment.controller");
// const upload = require("../middlewares/imageUpload");
const router = express.Router();


router.get("/", getComments);
router.get("/:commentId", getComment);
router.post("/", addComment);
router.patch("/:commentId", updateComment);
router.delete('/:commentId', removeComment)

module.exports = router;
