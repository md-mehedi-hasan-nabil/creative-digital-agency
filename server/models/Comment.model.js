const { Schema, default: mongoose } = require("mongoose");

const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    service: {
        type: Schema.Types.ObjectId,
        ref: 'service'
    },
    text: {
        type: String,
        required: true
    },
    active: Boolean,
}, { timestamps: true });

const CommentModel = mongoose.model("comment", commentSchema);

module.exports = CommentModel
