var http = require("http");
var fs = require("fs");


http.createServer(function (req, res) {
    var html = fs.readFile("./index.html", function (err, html) {
        var nombre = "Rubén";
        var html = html.toString();
        
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(html);
        console.log("peticion recibida");
      
    });


}).listen(8080);