const express = require('express');
const app = express();

app.get("/",function(req,res){
 res.send("welcome to my web page !!!");
});
app.get("/about",function(req,res){
    res.send("hi this is venkat love coding");
   });
app.get("/section",function(req,res){
    res.send("aws,java,ui");
   });   
app.listen(3000,function() {
    console.log("server started")
  });