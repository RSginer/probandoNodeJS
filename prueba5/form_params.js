var http = require("http");
var fs = require("fs");
var parser = require("./param_parser.js");
var p = parser.parse;

http.createServer(function (req, res) {


    var html = fs.readFile("./index.html", function (err, html) {
        var nombre = "Ruben";
        var html_string = html.toString();
        // Expresion regular que busca en index.html los simbolos { } y devuelve un array con los valores que contienen
        var variables = html_string.match(/[^\{\}]+(?=\})/g);

        var parametros = p(req);
        for (var i = 0; i < variables.length; i++) {
            var value = eval(variables[i]);
            html_string = html_string.replace("{" + variables[i] + "}", parametros[variables[i]]);
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(html_string);
        console.log(req);
    });


}).listen(8080);