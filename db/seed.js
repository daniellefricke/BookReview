var mongoose = require("./connection");
var seedData = require("./seeds");

var Book = mongoose.model("Book");
var Review = mongoose.model("Review");

Book.remove({}).then(function(){
  Book.collection.insert(seedData).then(function(){
    process.exit();
  });
});

Review.remove({}).then(function(){
  Review.collection.insert(seedData).then(function(){
    process.exit();
  });
});
