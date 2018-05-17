//Import the HTTP module
var http = require('http');
//Import the module1 module
var module1 = require('./module1');
var module2 = require('./module2');

//Function to handle resquests on port 8000
function onRequest(request, response){
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.write(module2.myVariable);
  module2.myFunction();
  response.end();
}

//Create a server and listen on port 8000
http.createServer(onRequest).listen(8000);
