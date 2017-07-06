var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/bookreviews');

var ReviewSchema = new mongoose.Schema(
  {
    body: String
  })

var BookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    image_url: String,
    summary: String,
    reviews: [ReviewSchema]
  })

  mongoose.model("Review", ReviewSchema);
  mongoose.model("Book", BookSchema);

  module.exports = mongoose;

// var db = mongoose.connection;
//   db.on('error', err => {
//     console.log(err);
// })
//
// db.once('open', () => {
//   console.log("database has been connected!");
// });
