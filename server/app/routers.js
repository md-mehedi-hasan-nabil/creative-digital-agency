const express = require("express");
const router = express.Router();

const ServiceRouter = require("../routes/AgencyService.routes");
const UserRouter = require("../routes/User.routes");
const CommentRouter = require("../routes/Comment.routes");
const NewsRouter = require("../routes/News.routes");
const TestimonialRouter = require("../routes/Testimonial.routes");
const errorHandler = require("../middlewares/errorHandler");
const notFoundHandler = require("../middlewares/notFoundHandler");

// apply all routes 
router.use("/users", UserRouter);
router.use("/services", ServiceRouter);
router.use("/comments", CommentRouter);
router.use("/news", NewsRouter);
router.use("/testimonials", TestimonialRouter);

router.get("/health", (_, res) => {
    res.status(200).json({ message: "Success" })
});

router.get("/", (_, res) => {
    res.send("Hello World")
})

router.use(errorHandler)
router.use(notFoundHandler)


module.exports = router

