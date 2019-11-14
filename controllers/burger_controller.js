

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    res.redirect("/burger");
});

router.get("/burger", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { burgerInfo: data })
    });
});

router.post("/burger/add", function (req, res) {
    burger.insertOne(req.body.burger_name, function (data) {

        console.log(data);
        res.redirect("/");
    });
});

router.put("/burger/:id", function (req, res) {

    burger.updateOne(req.params.id, function (data) {

        console.log(data);
        res.sendStatus(200);
    });
});

module.exports = router;