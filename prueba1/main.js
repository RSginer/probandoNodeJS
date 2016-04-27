/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require("http");

var servidor = http.createServer(function(solicitud, respuesta){
    console.log("Hola q ase");
    respuesta.end("Hola mundo");
});

servidor.listen(8080);