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



app.get("/api/books", function(req, res) {
  Book.find({}).then((books)=>{
    res.json(books)
  })
});









app.get("/*", function(req, res){
    res.sendFile(__dirname + "/public/js/app-root.html");
});

app.listen(app.get('port'), ()=>{
  console.log("listening")
})
