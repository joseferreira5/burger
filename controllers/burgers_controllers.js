var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  var burgerName = req.body.newBurger;
  burger.insertOne(burgerName, function(data) {
    res.send("Burger added!")
  });
});

router.post("/api/burger/:id", function(req, res) {
  var id = req.params.id;

  burger.updatedOne(burgerId, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
