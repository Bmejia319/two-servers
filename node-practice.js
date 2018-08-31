var http =  require("http");

var PORT = 7500;

var PORT2 = 7000; 

var server = http.createServer(handleRequest);

var server = http.createServer(handleRequestB);

function handleRequest(request, response) {

  response.end("You're an amazing person" + request.url);

}

server.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);

});

function handleRequestB(request, response) {

  response.end("You are a horrible person" + request.url);

}

server.listen(PORT2, function() {

  console.log("Server listening on: http://localhost:" + PORT2);

});

