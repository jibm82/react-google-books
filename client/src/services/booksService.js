import axios from "axios";

export default {
  getBooks: () => {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  search: query => {
    return axios.get(`/api/books/search/${query}`);
  }
};