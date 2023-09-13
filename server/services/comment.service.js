const CommentModel = require("../models/Comment.model")

function findComments() {
    return CommentModel.find({}).populate("user")
}

function findCommentByProperty(key, value) {
    if (key === "_id") {
        return CommentModel.findById(value).populate("user")
    }

    return CommentModel.findOne({ [key]: value }).populate("user")
}

function createNewComment({ user, service, text }) {
    const newComment = CommentModel({
        user, service, text
    })

    return newComment.save()
}

module.exports = {
    findComments,
    findCommentByProperty,
    createNewComment
}