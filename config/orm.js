var connection = require("./connection.js");

var orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }/* ,
  insertOne: function(tableInput, colInput, valOfCol) {
    var queryString = "INSERT INTO ?? (??) VALUES ??";

    console.log(queryString);

    connection.query(queryString, [tableInput, colInput, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updatedOne: function(burgerId) {
    var queryString = "UPDATE burgers SET devoured = true, WHERE id = ??";

    console.log(queryString);

    connection.query(queryString, [burgerId], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  } */
};

module.exports = orm;