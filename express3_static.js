var express = require('express');  
var app = express();
app.use(express.static('./html'));  
app.get('/', (req, res) => {
   res.send('Hello World!')
 })
 app.post('/', (req, res) => {
   res.send('post request received')
 })
var server = app.listen(4000, function () {  
  var host = server.address().address  
  var port = server.address().port  
 console.log("Example app listening at http://%s:%s", host, port)  
})