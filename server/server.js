var express = require('express');
var path = require("path");
var app = express();

var server = app.listen(1337, function () {
    var port = server.address().port;

    colors = {
        green: function (str) {
            return "\033[0m\033[32m" + str + "\033[0m"
        },
        red: function (str) {
            return "\033[0m\033[31m" + str + "\033[0m"
        }
    };

    console.log(colors.green("  Server running on port ") + colors.red(port) + "\n");

    app.use(express.static(path.join(__dirname, '../')))

});
