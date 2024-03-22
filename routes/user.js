const express = require("express")
const router = express.Router();
const passport = require("passport")

const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { saveRedirectUrl } = require("../middleware.js")

const userController = require("../controllers/user.js");

// router.post(
//   "/signup",
//   wrapAsync(async (req, res) => {
//     try {
//       let { username, email, password } = req.body;
//       const newUser = new User({ email, username });
//       const registeredUser = await User.register(newUser, password);
//       console.log(registeredUser);
//       req.login(registeredUser, (err) => {
//         if (err) {
//           return next(err);
//         }
//         req.flash("success", "Welcome to Wanderlust!");
//         res.redirect("/Listings");
//       });
//     } catch (e) {
//       req.flash("error", e.message);
//       res.redirect("/signup");
//     }
//   })
// );

// Sign Up

router.route("/useres/signup")
.get(userController.renderSignUp)
.post(userController.getSignUp 
);


router.route("/users/login")
// Login Route
.get(userController.renderLoginForm )
.post(
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.getLogin
);


// Logout Routes

router.get("/users/logout",userController.logout);


module.exports = router;
