
// Importing 'http' module 
var http = require('http');//create a server object:

// Creating Server 
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'}); // http header
   res.write('<h1>Hello World!<h1>'); //write a response
   res.end(); //end the response
}).listen(8888, function(){
 console.log("server running at port 8888"); //the server object listens on port 3000
});


/* 
// setting up a little bit more sophisticated web server

// Importing 'http' module 
const http = require('http');
// Setting Port Number 
const port = 8888;
  
// Setting hostname as the localhost
// NOTE: You can set hostname to something 
// else as well, for example, say 127.0.0.1
const hostname = 'localhost';
  
// Creating Server 
const server = http
    .createServer(function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`
                <!doctype html>
                <html>
                <body>
                    <h1>Server semplice</h1>
                    <p>Questo server è in esecuzione su Nodejs </p>
                </body>
                </html>`);
      })
    .listen(port, function ()  {
    // Making the server to listen to required
    // hostname and port number
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/

/*
// the following alternate version adds some routing
// Importing 'http' module 
const http = require('http');
// Setting Port Number 
const port = 8888;

// Setting hostname as the localhost
const hostname = 'localhost';

http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'}); // http header
 var url = req.url;
 if(url ==='/about'){
    res.write('<h1>about us page<h1>'); //write a response
    res.end(); //end the response
 }else if(url ==='/contact'){
    res.write('<h1>contact us page<h1>'); //write a response
    res.end(); //end the response
 }else{
    res.write('<h1>Hello World!<h1>'); //write a response
    res.end(); //end the response
 }}).listen(3000, function(){
 console.log(`Server running at http://${hostname}:${port}/`); //the server object listens on port 3000
});
*/
