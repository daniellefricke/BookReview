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

app.get("/api/books/:title", function(req, res){
  Book.findOne({title: req.params.title}).then(function(book){
    res.json(book)
  });
});

app.post("/api/books", function(req, res){
  Book.create(req.body).then(function(book){
    res.json(book)
  });
});

app.delete("/api/books/:title", function(req, res){
  Book.findOneAndRemove({title: req.params.title}).then(function(){
    res.json({success: true})
  });
});

app.put("/api/books/:title", function(req, res){
  Book.findOneAndUpdate({title: req.params.title}, req.body, {new: true}).then(function(book){
    res.json(book)
  });
});




app.get("/*", function(req, res){
    res.sendFile(__dirname + "/public/js/app-root.html");
});

app.listen(app.get('port'), ()=>{
  console.log("listening")
})
