const wrapAsync = require("../utils/wrapAsync.js")
const Review = require("../models/reviews.js")
const express = require("express")
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing.js")
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js")

const reviewController = require("../controllers/reviews.js")

//Review

// post route

router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview))

// Delete Review

router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview))

module.exports = router;