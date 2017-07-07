var mongoose = require("./connection");

var Book = mongoose.model("Book");
var Review = mongoose.model("Review");

Book.remove({});
Review.remove({});

var review1 = new Review({body: "lorem ipsum"})
var review2 = new Review({body: "ipsum lorem"})
var review3 = new Review({body: "lorem ipsum"})
var review4 = new Review({body: "ipsum lorem"})
var review5 = new Review({body: "lorem ipsum"})
var review6 = new Review({body: "ipsum lorem"})

var book1 = new Book({title: "Harry Potter and the  Sorcerer's Stone", author: "JK", image_url: "http://image_url.timeinc.net/time/2007/harry_potter/hp_books/sorce_stone.jpg", summary: "Harry Potter is the most miserable, lonely boy you can imagine. He’s shunned by his relatives, the Dursley’s, that have raised him since he was an infant. He’s forced to live in the cupboard under the stairs, forced to wear his cousin Dudley’s hand-me-down clothes, and forced to go to his neighbour’s house when the rest of the family is doing something fun. Yes, he’s just about as miserable as you can get."})
var book2 = new Book({title: "Harry Potter and the Goblet of Fire", author: "JK", image_url: "http://images.gr-assets.com/books/1361482611l/6.jpg", summary: "Harry can’t believe it. The Weasley’s have invited him to the Quidditch World Cup, which means he’ll get to leave the Dursley’s house early and go see a game that anyone would kill to see."})
var book3 = new Book({title: "Harry Potter and the Chamber of Secrets", author: "JK", image_url: "http://images.gr-assets.com/books/1361482611l/6.jpg", summary: "It’s been another long summer at the Dursley’s for Harry Potter. He can’t wait to get back to Hogwarts and is counting down the days until he can return. He’s surprised when, on his birthday, a strange elfish creature named Dobby shows up with dire warnings for Harry: He must not return to Hogwarts!"})
var book4 = new Book({title: "Harry Potter and the Prisoner of Azkaban", author: "JK", image_url: "http://images.gr-assets.com/books/1361482611l/6.jpg", summary: "Harry starts off his third year at Hogwarts rather eventfully when he inadvertently blows up his Aunt Marge, goes on the run, and is then personally absolved by the Minister of Magic himself. He then learns that mass murderer, Sirius Black, is intent on killing him, and Mr. Weasley makes him promise a strange thing, that no matter what he hears he won’t go looking for Black. Confused, Harry agrees."})
var book5 = new Book({title: "Harry Potter and the Order of the Phoenix", author: "JK", image_url: "http://images.gr-assets.com/books/1361482611l/6.jpg", summary: "It's been another long, hot summer at the Dursleys' for Harry Potter. Having spent most of it in an adolescent funk of depression and bitterness over the lack of informative letters from his friends about Voldemort's return, he's suddenly jolted out of his bad mood when two Dementors show up in the town of Little Whinging and attack Harry and his cousin, Dudley. When Harry uses magic to drive them off, however, he quickly receives a succession of owls from the Ministry, requiring him to attend a disciplinary hearing. His heart sinks when he reads that the question of whether to expel him from Hogwarts will be decided at the hearing."})
var book6 = new Book({title: "Harry Potter and the Half Blood Prince", author: "JK", image_url: "http://images.gr-assets.com/books/1361482611l/6.jpg", summary: "Harry's sixth year at Hogwarts opens to find him more mellow and grown up than ever. The death of Sirius Black has left an indelible mark on him, and he's more determined than ever to put an end to Voldemort and his Death Eaters. He's happy to escape the tyranny of the Dursley's early in the summer when Dumbledore picks him up to attend to a mysterious errand, which ends up in Harry's persuading ex-professor, Horace Slughorn, to come out of retirement to teach at Hogwarts again."})
var book7 = new Book({title: "Harry Potter and the Deathly Hallows", author: "JK", image_url: "http://images.gr-assets.com/books/1361482611l/6.jpg", summary: "Harry has finally come of age, and finally started on his final journey to defeat Voldemort for good. The Dursely’s are forced to go into hiding so that Voldemort’s Death Eaters will not torture them for information, and Harry sets off with Ron and Hermione on a difficult quest to find and destroy the last of Voldemort’s Horcruxes. Only once those have been destroyed, Harry knows, can Voldemort truly be killed."})

var reviews = [review1, review2, review3, review4, review5, review6]
var books = [book1, book2, book3, book4, book5, book6, book7]

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
