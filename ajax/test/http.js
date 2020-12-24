var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer();

server.listen(8888,function(){
  console.log("8888");
});

server.on('requerst',function(req,res){
  var urls = url.parse(req.url,true);
  if(url.pathname == '/getname'){

  }else{
    fs.readFile('.'+urls.pathname,function(err,data_str){
      if(!err){
        res.end(data_str);
      }else{
        res.end('');
      }
    })
  }

});