var express = require('express'),
    logger = require('morgan')('dev'),
    server = express();


    server.use(express.static(__dirname+'/public'));
    server.use(logger);


    server.get('/',home);


    server.listen(8080,listenCallback);

    function home(req,res){
      res.sendFile('public/html/index.html',{root: __dirname});
    }
    function listenCallback(){
      console.log('Now listening to port 8080');
    }
