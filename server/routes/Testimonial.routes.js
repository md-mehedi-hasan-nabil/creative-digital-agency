const express = require("express");
const { getTestimonials, getTestimonial, addTestimonial, updateTestimonial, removeTestimonial } = require("../controllers/Testimonial.controller");
// const upload = require("../middlewares/imageUpload");
const router = express.Router();


router.get("/", getTestimonials);
router.get("/:testimonialId", getTestimonial);
router.post("/", addTestimonial);
router.patch("/:testimonialId", updateTestimonial);
router.delete('/:testimonialId', removeTestimonial)

module.exports = router;
