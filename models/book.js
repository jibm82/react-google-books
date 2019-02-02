const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: [String], required: true },
  description: String,
  image: String,
  link: String,
  createdAt: { type: Date, default: Date.now }
});

bookSchema.statics.findAllEtags = function(callback) {
  Book.find({})
    .select({ etag: 1, _id: 0 })
    .exec(callback);
};

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
