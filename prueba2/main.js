var http = require("http");
var fs = require("fs");


http.createServer(function (req, res) {
    var html = fs.readFile("./index.html", function (err, html) {
        res.write(html);
        console.log("peticion recibida");
        res.end();
    });


}).listen(8080);