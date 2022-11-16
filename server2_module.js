var http = require('http');
var dt = require('./myModule');
const PORT = 4000;

http.createServer(function (req, res) {
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(PORT);

console.log("Running at port " + PORT)