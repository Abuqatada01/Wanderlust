const User = require("../models/user.js");
const listing = require("../models/listing.js");

module.exports.renderSignUp =  (req, res) => {
    res.render("user/signup.ejs",)
  }


  module.exports.getSignUp = async (req, res) => {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.flash("success", "Welcome to Wanderlust!");
    res.redirect("/listings");
  }


  module.exports.renderLoginForm = (req, res) => {
    res.render("user/login.ejs");
  }


  module.exports.getLogin = async (req, res, next) => {
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  }


  module.exports.logout =  (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "you are logged out!");
      res.redirect("/listings");
    });
  }