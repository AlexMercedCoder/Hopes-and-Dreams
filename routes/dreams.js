///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router();
const User = require("../models/User");
const Dream = require("../models/Dreams");
const auth = require("./authMiddleware");

///////////////////////////////
// Router Specific Middleware
////////////////////////////////
router.use(auth);

///////////////////////////////
// Router Routes
////////////////////////////////
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router;
