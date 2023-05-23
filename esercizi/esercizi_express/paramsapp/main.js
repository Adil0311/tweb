/*
    This code defines two route handlers: one for GET requests and one for POST requests. 
    The GET route handler reads the parameters from the URL query string using the req.query object, 
    logs them to the console, and sends them back to the client as a JSON object.
    Note that this code saves the uploaded files to a directory named uploads in the server's root 
    directory. You will need to create this directory manually before running the code. 
    Also, be aware that this code does not perform any validation or sanitization of the incoming 
    parameters or files, so it is not suitable for production use without additional security measures.
*/
const http = require('http');
const express = require('express');
const multer = require('multer');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

//  Define a route handler for GET requests
app.get('/', (req, res) => {
  const params = req.query;
  console.log(params);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(params));
});

//  Define a route handler for POST requests
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

/*
    The POST route handler uses the multer middleware to handle file uploads and form data. 
    The upload.any() method tells multer to accept any kind of file upload or form data. 
    The uploaded files can be accessed using the req.files object, and the form data can be 
    accessed using the req.body object. 
    The handler logs both the form data and files to the console and sends them back to the 
    client as a JSON object. 
*/
app.post('/', upload.any(), (req, res) => {
  const params = req.body;
  const files = req.files;
  console.log(params);
  console.log(files);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ params, files }));
});

/*
    The server listens for incoming requests on the specified hostname and port using the 
    http.createServer() method.
*/
// Start the server
const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});