const express = require("express");
const { getAllNews, getNews, addNews, updateNews, removeNews } = require("../controllers/News.controller");
// const upload = require("../middlewares/imageUpload");
const router = express.Router();


router.get("/", getAllNews);
router.get("/:newsId", getNews);
router.post("/", addNews);
router.patch("/:newsId", updateNews);
router.delete('/:newsId', removeNews)

module.exports = router;
