var express = require("express");
var parser = require("body-parser");
var hbs = require("hbs");
var mongoose = require("./db/connection");

var app = express();

var Book = mongoose.model("Book");
var Review = mongoose.model("Review");

app.set("port", process.env.PORT || 3001);

app.set("view engine", "hbs");

app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}));

app.get("/", function(req,res){
  res.send("Hello World!")
})












app.listen(app.get('port'), ()=>{
  console.log("listening")
})
