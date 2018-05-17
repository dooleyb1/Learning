//Import fileSystem & HTTP module
var http = require('http');
var fs = require('fs');

//Function to handle resquests on port 8000
function onRequest(request, response){
  response.writeHead(200, {'Content-Type' : 'text/html'});

  //Read index.html and perform function()
  fs.readFile('./index.html', null, function(error, data){
    if(error){
      response.writeHead(404);
      response.write('File not found!');
    } else {
      response.write(data);
    }
    response.end();
  });
}

//Create a server and listen on port 8000
http.createServer(onRequest).listen(8000);
