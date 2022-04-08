var Crawler = require("crawler");
var fs = require("fs");
var c = new Crawler({
    maxConnections : 10,
    jquery: true,
    callback:function(err, res, done){
        if(err){
            console.error(err.stack);
        }else{
          console.log(res.body)
        }
        done();
    }
});
 
c.queue({
  uri:"https://hunian88.com/index.html",
});
 