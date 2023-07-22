var http=require('http');
var imp=require('./secondmodule');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write(imp.myMsg());
    res.end();
}).listen(8080);