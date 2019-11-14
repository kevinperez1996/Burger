
var connection = require("./connection");


function properSyntax(num) {
    var array = [];

    for (var i = 0; i < num; i++) {
        array.push("?");
    }

    return array.toString();
}

function objectToSql(ob) {
    // column1=value, column2=value2,...
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}

var orm = {

    selectAll: function (table, xx) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            xx(result);
        });
    },

    insertOne: function (table, column, value, xx) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += column.toString();
        queryString += ") "
        queryString += "VALUES ("
        queryString += properSyntax(value.length)
        queryString += ") "

        connection.query(queryString, value, function (err, result) {
            if (err) {
                throw err;
            }
            xx(result);
        });
    },

    updateOne: function (table, object, condition, xx) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objectToSql(object);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            xx(result);
        });
    }
}

module.exports = orm;