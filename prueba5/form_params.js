var http = require("http");
var fs = require("fs");
var parser = require("./param_parser.js");
var view = require("./render_view.js");
var p = parser.parse;
var v = view.replace_view;

http.createServer(function (req, res) {


    var html = fs.readFile("./index.html", function (err, html) {
        var nombre = "Ruben";
        var parametros = p(req);
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(v);
        console.log(req);
    });


}).listen(8080);