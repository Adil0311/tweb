// Importing 'http' module 
const http = require('http');
  
// Setting Port Number 
const port = 8080;
  
// Setting hostname as the localhost
// NOTE: You can set hostname to something 
// else as well, for example, say 127.0.0.1
const hostname = 'localhost';
  
// Creating Server 
const server = http
    .createServer(function (req, res) {
        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // convert Buffer to string
            });
            req.on('end', () => {
                console.log(body);
                res.end(`
                    <!doctype html>
                    <html>
                    <body>
                        <h1>Method: ${req.method}</h1>
                        <h2>Post body:</h2>
                        <p>${body}</p>
                    </body>
                    </html>`);
            });
        }
        else { // GET method
            res.writeHead(200, {'Content-Type': 'text/html'});
            const params = req.url.slice(req.url.indexOf('?') + 1);
            const keyvalues = params.replace('&','<br>');
            res.end(`
                <!doctype html>
                <html>
                <body>
                    <h1>Method: ${req.method}</h1>
                    <h2>Query parameters:</h2>
                    <p>${keyvalues}</p>
                </body>
                </html>`);
      }})
    .listen(port, function ()  {
    // Making the server to listen to required
    // hostname and port number
    console.log(`Server running at http://${hostname}:${port}/`);
});
  
