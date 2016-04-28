var http = require("http");
var fs = require("fs");


http.createServer(function (req, res) {


    var html = fs.readFile("./index.html", function (err, html) {
        var nombre = "Ruben";
        var html_string = html.toString();
        // Expresion regular que busca en index.html los simbolos { } y devuelve un array con los valores que contienen
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var array_parametros= [];
            if(req.url.indexOf("?")>0){
                var url_data = req.url.split("?");
                var array_parametros = url_data[1].split("&");
            }
            var parametros=[];
            for (var i = 0; i < array_parametros.length; i++) {
                var parametro = array_parametros[i];
                var param_data = parametro.split("=");
                parametros[param_data[0]] = param_data[1];
                
            }
        
        for (var i = 0; i < variables.length; i++) {
            var value = eval(variables[i]);
            html_string =  html_string.replace("{"+variables[i]+"}", parametros[variables[i]]);
        }
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(html_string);
            console.log(req);
    });


}).listen(8080);