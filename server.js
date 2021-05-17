const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});



app.post("/",function(req,res){
  var n1 =(req.body.num1);
  var n2 =(req.body.num2)/100;
  var result=n1/(n2*n2);


  res.send("Your BMI is :"+result);
});





app.listen(3000, function(){
  console.log("Server started....");
});
