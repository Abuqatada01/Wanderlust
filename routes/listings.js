const express = require("express")
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing, } = require("../middleware.js");
const listingcontroller = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({storage})

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


//router.get("/", (req, res) => {
//     res.send("Hi, I am root");
//   });

router.route("/listings")
//Index Route
.get( wrapAsync(listingcontroller.index))

// Create Route
.post( isLoggedIn,upload.single("listing[image]"), wrapAsync(listingcontroller.createListings)
);



//New Route
router.get("/listings/new", isLoggedIn, listingcontroller.newform);

router.route("/listings/:id")
//Show Route
.get( wrapAsync(listingcontroller.showListing))
//Update Route
.put(isLoggedIn, isOwner,upload.single("listing[image]"),validateListing, wrapAsync(listingcontroller.updateListing))
//Delete Route
.delete(isLoggedIn, isOwner, wrapAsync(listingcontroller.destroyListings)
);



//Edit Route
router.get("/listings/:id/edit", isLoggedIn, isOwner, wrapAsync(listingcontroller.renderEditListings));

module.exports = router;
