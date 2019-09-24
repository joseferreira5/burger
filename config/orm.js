var connection = require("./connection.js");

var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
      //console.log(result);
    });
  },
  insertOne: function(burgerName, cb) {
    var queryString = "INSERT INTO burgers SET ??";
    connection.query(queryString, [burgerName], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updatedOne: function(burgerId, cb) {
    var queryString = "UPDATE burgers SET devoured = true, WHERE id = ??";
    connection.query(queryString, [burgerId], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;