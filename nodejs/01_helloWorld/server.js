//Import the HTTP module
var http = require('http');

//Function to handle resquests on port 8000
function onRequest(request, response){
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.write('Hello World');
  response.end();
}

//Create a server and listen on port 8000
http.createServer(onRequest).listen(8000);
