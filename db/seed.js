var mongoose = require("./connection");

var Book = mongoose.model("Book");
var Review = mongoose.model("Review");

Book.remove({});
Review.remove({});

var review1 = new Review({body: "lorem ipsum"})
var review2 = new Review({body: "ipsum lorem"})

var book1 = new Book({title: "Harry Potter, Sorcerer's Stone", author: "JK", img: "http://img.timeinc.net/time/2007/harry_potter/hp_books/sorce_stone.jpg", summary: "lorem ipsum"})
var book2 = new Book({title: "Harry Potter, Goblet of Fire", author: "JK", img: "http://images.gr-assets.com/books/1361482611l/6.jpg", summary: "lorem ipsum"})

var reviews = [review1, review2]
var books = [book1, book2]

books.forEach((book, i) => {
  book.reviews.push(reviews[i], reviews[i+1])
  book.save((err,book) => {
    if (err){
      console.log(err)
    } else {
      console.log(book);
    }
  })
})

// Book.remove({}).then(function(){
//   Book.collection.insert(seedData).then(function(){
//     process.exit();
//   });
// });
//
// Review.remove({}).then(function(){
//   Review.collection.insert(seedData).then(function(){
//     process.exit();
//   });
// });
