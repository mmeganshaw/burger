var connection = require('./config/connection.js');

// Create the methods that will execute the necessary MYSQL commands in the controllers
// These are the methods you will need to use in order to retrieve and store data
// in your database

var orm = {

    selectAll: function(table, callback) {

        var queryString = "SELECT * FROM ??"; 
        connection.query(queryString, [table], function(err, result) {
            if (err) {
                throw err; 
            }
            callback(result)
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(table, strColVal, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + strCoVal + " WHERE " + condition;
        connection.query(querystring, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
};

// export the ORM object in module.exports

module.exports = orm;