const NewsModel = require("../models/News.model")
const createResponse = require("../utils/createResponse");

async function getAllNews(_, res, next) {
    try {
        const news = await NewsModel.find({}).populate("user")
        res.json(news)
    } catch (error) {
        next(error)
    }
}

async function getNews(req, res, next) {
    try {
        const { newsId } = req.params || {};

        const comment = await NewsModel.findById(newsId).populate("user")

        res.status(200).json(comment);
    } catch (error) {
        next(error)
    }
}

async function addNews(req, res, next) {
    try {
        const { user, title, description, thumbnail } = req.body

        const newNews = await new NewsModel({
            user, title, description, thumbnail
        })

        await newNews.save()

        res.json(createResponse.success("News add successful", newNews))
    } catch (error) {
        next(error)
    }
}

async function updateNews(req, res, next) {
    try {
        const { newsId } = req.params || {};

        const result = await NewsModel.findByIdAndUpdate(newsId, {
            $set: req.body
        }, { new: true })

        res.json(createResponse.success("News update successful.", result))
    } catch (error) {
        next(error)
    }
}

async function removeNews(req, res, next) {
    try {
        const { newsId } = req.params || {};
        const result = await NewsModel.findByIdAndDelete(newsId)

        res.json(createResponse.success("News is deleted.", result))
    } catch (error) {
        next(error)
    }
}

module.exports = Object.freeze({
    getAllNews, getNews, addNews, updateNews, removeNews
})