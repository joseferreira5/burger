// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  }/* ,
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(burgerId, cb) {
    orm.updatedOne("burger", burgerId, function(res) {
      cb(res);
    });
  } */
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
