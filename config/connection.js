var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'burgers_db'
})
    connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack)
        return; 
    }
    console.log("connected as id: " + connection.threadID);
});

console.log(connection); 

module.exports = connection;