
var mysql = require ("mysql"); 

var connection = mysql.createConnection ({
    host: "ol5tz0yvwp930510.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "cvj7n162kqpzg32l", 
    password: "n1p03dmj2q1q9yi6", 
    database: "aly3q24n9x2of4th"
});

connection.connect(function(err){   
    if (err){
        console.log("Encountered Error: " + err);
        return;
    }
    console.log("Connected");
})

module.exports = connection;
