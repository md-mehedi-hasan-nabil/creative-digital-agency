const CommentModel = require("../models/Comment.model");
const commentService = require("../services/comment.service");
const createResponse = require("../utils/createResponse");

/**
 * 
 * get all comment with user info populate
 */
async function getComments(req, res, next) {
    try {
        const comments = await commentService.findComments()
        res.status(200).json(comments);
    } catch (error) {
        next(error)
    }
}

/**
 * 
 * get single comment with user info populate
 */
async function getComment(req, res, next) {
    try {
        const { commentId } = req.params || {};

        const comment = await commentService.findCommentByProperty("_id", commentId)

        res.status(200).json(comment);
    } catch (error) {
        next(error)
    }
}
/**
 * 
 * @param {add new comment}
 */
async function addComment(req, res, next) {
    try {
        const { user, service, text } = req.body // user == userId and service == serviceId
        const result = commentService.createNewComment({ user, service, text })

        res.status(201).json(createResponse.success("Comment create successful.", result))
    } catch (error) {
        next(error)
    }
}

async function updateComment(req, res, next) {
    try {
        const { commentId } = req.params || {};
        const { text } = req.body
        const result = await CommentModel.findByIdAndUpdate(commentId, {
            $set: {
                text
            }
        }, { new: true })
        res.json(createResponse.success("Comment update successful.", result))
    } catch (error) {
        next(error)
    }
}

async function removeComment(req, res, next) {
    try {
        const { commentId } = req.params || {};
        const result = await CommentModel.findByIdAndDelete(commentId)
        res.json(createResponse.success("Comment is deleted.", result))
    } catch (error) {
        next(error)
    }
}

module.exports = Object.freeze({
    getComments, getComment, addComment, updateComment, removeComment
})