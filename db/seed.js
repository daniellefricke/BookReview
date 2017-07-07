var mongoose = require("./connection");

var Book = mongoose.model("Book");
var Review = mongoose.model("Review");

Book.remove({});
Review.remove({});

var review1 = new Review({body: "I resisted reading this book for a long time, thinking that it would be 'too childish' to hold my interest. Then, one night back in 2007, I happened to be at my local Barnes & Noble during the midnight release party for Harry Potter and The Deathly Hallows, the last book in the series. Seeing the enthusiasm of all the fans gathered there (some of whom were in full costume) made me curious, so I wended my way through the crowd (in the process wondering what "The Sorting Hat" was all about) and approached the first free cashier I could find, the first book in my hands. I was suddenly eager to discover what all the fuss was about!"})
var review2 = new Review({body: "The Goblet of Fire really turned up the action and intensity of the series. The first three were all fun and enjoyable as they created a magical world. However, book four seemed to be the first that introduced the overall conflict in a more direct way and was "book one" of the conflict with He Who Must Not Be Named that would end in The Deathly Hallows. Even if you've seen the movies, the books are deserving of a read. The cliche that the books are always better than the movies holds very true here. We hope that JK Rowling continues to write for many years and that she can create other worlds that are equally as imaginative and engaging as this one. Thanks for a great ride!"})
var review3 = new Review({body: "This series is wonderful for introducing children not only to a world of imagination but also to a world which encourages thought about ethics, the choices one makes which have far-reaching influence on ones own life as well as others, the value of family and friendship and does it all using wonderful characters in a gripping story. Highly recommended."})
var review4 = new Review({body: "Highly enjoyed this final book to this series. While I disliked one statement by Dumbledore in the second to last book, this final book seemed to hit the mark. I particularly enjoyed the family building uplifting message that love can see us through difficult times. The example of Harry being the kind of man that was brave, clever and masculine enough to be a guide, protector and provider for those that depended upon him is a good role model for boys in a world that otherwise mocks men as stooges and incompetents. Thank you J.K. Rowling for providing good role models for both sexes in these books."})
var review5 = new Review({body: "A great addicting read. Better than the first two books I'd say. I loved Lupin and Crookshanks the most. And I especially loved the last chapter of this book. There is much in the book that is not in the movie, so it's worth a read even if you've seen all the films."})
var review6 = new Review({body: "As I wrote before: I just love all Harry Potter books, they are very engaging and beautifully written. Plenty of details describing characters and the magical world, which combined with Rowling's sense of humor make these books a masterpiece. I'd say easy to read even for a 4th. Grader, but at the same time people from any age will enjoy them. Please let me put them this way: I first watched the movies and I loved them, then I read the books and now I am disappointed about the movies. There is so much detail, important facts, and character development that the movies don't show which makes reading the books a must. Won't be disappointed about the books."})
var review7 = new Review({body: "This is by far my favorite Harry Potter book so far. The writing has gotten so much better over the past 2 books, (which I did also love)... The character development has been amazing. The story is interesting as usual. The continuation of past events would be very easy for a newcomer to follow. I find it strange that anyone would start reading in the middle of the series, but I honestly think it wouldn't be that difficult with the way that Rowling integrates everything."})
var review8 = new Review({body: "Another win for JK Rowling. These books are fantastic."})
var review9 = new Review({body: "I love all HP books. JK did an amazing job on the series"})

var book1 = new Book({title: "Harry Potter and the  Sorcerer's Stone", author: "JK", image_url: "https://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer%27s_Stone.jpg", summary: "Harry Potter is the most miserable, lonely boy you can imagine. He’s shunned by his relatives, the Dursley’s, that have raised him since he was an infant. He’s forced to live in the cupboard under the stairs, forced to wear his cousin Dudley’s hand-me-down clothes, and forced to go to his neighbour’s house when the rest of the family is doing something fun. Yes, he’s just about as miserable as you can get."})
var book2 = new Book({title: "Harry Potter and the Goblet of Fire", author: "JK", image_url: "http://images.gr-assets.com/books/1361482611l/6.jpg", summary: "Harry can’t believe it. The Weasley’s have invited him to the Quidditch World Cup, which means he’ll get to leave the Dursley’s house early and go see a game that anyone would kill to see."})
var book3 = new Book({title: "Harry Potter and the Chamber of Secrets", author: "JK", image_url: "http://media.harrypotter.bloomsbury.com/rep/g/Harry%20Potter%20and%20the%20Chamber%20of%20Secrets%205.jpg", summary: "It’s been another long summer at the Dursley’s for Harry Potter. He can’t wait to get back to Hogwarts and is counting down the days until he can return. He’s surprised when, on his birthday, a strange elfish creature named Dobby shows up with dire warnings for Harry: He must not return to Hogwarts!"})
var book4 = new Book({title: "Harry Potter and the Prisoner of Azkaban", author: "JK", image_url: "http://prodimage.images-bn.com/pimages/9780439136365_p0_v1_s1200x630.jpg", summary: "Harry starts off his third year at Hogwarts rather eventfully when he inadvertently blows up his Aunt Marge, goes on the run, and is then personally absolved by the Minister of Magic himself. He then learns that mass murderer, Sirius Black, is intent on killing him, and Mr. Weasley makes him promise a strange thing, that no matter what he hears he won’t go looking for Black. Confused, Harry agrees."})
var book5 = new Book({title: "Harry Potter and the Order of the Phoenix", author: "JK", image_url: "https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg", summary: "It's been another long, hot summer at the Dursleys' for Harry Potter. Having spent most of it in an adolescent funk of depression and bitterness over the lack of informative letters from his friends about Voldemort's return, he's suddenly jolted out of his bad mood when two Dementors show up in the town of Little Whinging and attack Harry and his cousin, Dudley. When Harry uses magic to drive them off, however, he quickly receives a succession of owls from the Ministry, requiring him to attend a disciplinary hearing. His heart sinks when he reads that the question of whether to expel him from Hogwarts will be decided at the hearing."})
var book6 = new Book({title: "Harry Potter and the Half Blood Prince", author: "JK", image_url: "https://images-na.ssl-images-amazon.com/images/I/51NbOxBO%2BBL._SY344_BO1,204,203,200_.jpg", summary: "Harry's sixth year at Hogwarts opens to find him more mellow and grown up than ever. The death of Sirius Black has left an indelible mark on him, and he's more determined than ever to put an end to Voldemort and his Death Eaters. He's happy to escape the tyranny of the Dursley's early in the summer when Dumbledore picks him up to attend to a mysterious errand, which ends up in Harry's persuading ex-professor, Horace Slughorn, to come out of retirement to teach at Hogwarts again."})
var book7 = new Book({title: "Harry Potter and the Deathly Hallows", author: "JK", image_url: "http://prodimage.images-bn.com/pimages/9780545139700_p0_v4_s1200x630.jpg", summary: "Harry has finally come of age, and finally started on his final journey to defeat Voldemort for good. The Dursely’s are forced to go into hiding so that Voldemort’s Death Eaters will not torture them for information, and Harry sets off with Ron and Hermione on a difficult quest to find and destroy the last of Voldemort’s Horcruxes. Only once those have been destroyed, Harry knows, can Voldemort truly be killed."})

var reviews = [review1, review2, review3, review4, review5, review6, review7, review8, review9]
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
