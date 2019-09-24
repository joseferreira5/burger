// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(burgerName, enjoyed, cb) {
    orm.insertOne(burgerName, function(res) {
      cb(res);
    });
  },
  updateOne: function(burgerId, devoured, cb) {
    orm.updatedOne(burgerId, devoured, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
