const express = require("express")
const router = express.Router({mergeParams : true});


const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const { reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner ,saveRedirectUrl , isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/review.js");

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body)
    if (error) {
      let errMsg = error.details.map((el) =>
        el.message).join(",");
      throw new ExpressError(400, errMsg)
    }
    else {
      next()
    }
  }


  // reveiw
// Post reivew Route

router.post("/",

  isLoggedIn,
 validateReview,

  wrapAsync(reviewController.createReview));

  
  // delete Review Route
  
  router.delete(
    "/:reviewId",isLoggedIn ,isReviewAuthor ,
    wrapAsync(reviewController.eleteReview)
  );
  module.exports = router;
