const { Schema, default: mongoose } = require("mongoose");

const newsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    active: Boolean,
}, { timestamps: true });

const NewsModel = mongoose.model("news", newsSchema);

module.exports = NewsModel
