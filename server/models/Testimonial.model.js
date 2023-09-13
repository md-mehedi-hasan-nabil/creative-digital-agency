const { Schema, default: mongoose } = require("mongoose");

const testimonialSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    rating: {
        type: Number,
        default: 0,
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true });

const TestimonialModel = mongoose.model("testimonial", testimonialSchema);

module.exports = TestimonialModel
