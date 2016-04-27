var http = require("http");
var fs = require("fs");


http.createServer(function (req, res) {
    var html = fs.readFile("./index.html", function (err, html) {
        res.writeHead(200,{"Content-Type":"aplication/json"});
        res.write(JSON.stringify({nombre:"Rubén", username:"ruben"}));
        console.log("peticion recibida");
      
    });


}).listen(8080);