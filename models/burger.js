
var orm = require ("../config/orm");

var burger = {
    selectAll: function (xx){
        orm.selectAll("burger", function (res){
            xx(res);
        });
    },
    insertOne: function (name, xx){
        orm.insertOne("burger", ["burger_name", "devoured"], [name, false], xx);
    },
    updateOne: function (id, xx){
        var condition = "id=" + id;
        orm.updateOne("burger", {devoured: true}, condition, xx)
    }
};

module.exports = burger;