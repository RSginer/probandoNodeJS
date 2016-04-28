var http = require("http");
var fs = require("fs");


http.createServer(function (req, res) {
    if(req.url.indexOf("favicon.ico")>0){
        return;
    }

    var html = fs.readFile("./index.html", function (err, html) {
        var nombre = "Ruben";
        var html_string = html.toString();
        // Expresion regular que busca en index.html los simbolos { } y devuelve un array con los valores que contienen
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        //variables = ['nombre']
        for (var i = 0; i < variables.length; i++) {
            var value = eval(variables[i]);
            html_string =  html_string.replace("{"+variables[i]+"}", value);
        }
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(html_string);
            console.log(req);
    });


}).listen(8080);