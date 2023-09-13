const createResponse = require("../utils/createResponse");
const TestimonialModel = require("../models/Testimonial.model")


async function getTestimonials(req, res, next) {
    try {
        const testimonials = await TestimonialModel.find({}).populate("user")
        res.json(testimonials)
    } catch (error) {
        next(error)
    }
}

async function getTestimonial(req, res, next) {
    try {
        const { testimonialId } = req.params || {};

        const testimonial = await TestimonialModel.findById(testimonialId).populate("user")

        res.status(200).json(testimonial);
    } catch (error) {
        next(error)
    }
}

async function addTestimonial(req, res, next) {
    try {
        const { user, rating, message } = req.body

        const newTestimonial = await new TestimonialModel({
            user, rating, message
        })

        await newTestimonial.save()

        res.status(201).json(createResponse.success("Testimonial add successful.", newTestimonial))
    } catch (error) {
        next(error)
    }
}

async function updateTestimonial(req, res, next) {
    try {
        const { testimonialId } = req.params || {};
        const result = await TestimonialModel.findByIdAndUpdate(testimonialId, {
            $set: req.body
        }, { new: true })
        res.json(createResponse.success("Testimonial update successful.", result))
    } catch (error) {
        next(error)
    }
}

async function removeTestimonial(req, res, next) {
    try {
        const { testimonialId } = req.params || {};
        const result = await TestimonialModel.findByIdAndDelete(testimonialId)
        res.json(createResponse.success("Testimonial is deleted.", result))
    } catch (error) {
        next(error)
    }
}

module.exports = Object.freeze({
    getTestimonials, getTestimonial, addTestimonial, updateTestimonial, removeTestimonial
})