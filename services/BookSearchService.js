const axios = require("axios");
const apiKey = process.env.GOOGLE_API_KEY;
const baseUrl = "https://www.googleapis.com/books/v1/volumes";
const db = require("../models");

class BookSearchService {
  search(query) {
    return new Promise((resolve, reject) => {
      db.Book.findAllEtags((err, results) => {
        const etags = results.map(result => result.etag);

        axios
          .get(this.url(query))
          .then(response => {
            const items = this.itemsWithSavedValue(
              response.data.items || [],
              etags
            );
            resolve(items);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    });
  }

  itemsWithSavedValue(items, etags) {
    return items.map(item => {
      item.saved = etags.includes(item.etag);
      return item;
    });
  }

  url(query) {
    return `${baseUrl}?q=${query}&key=${apiKey}&langRestrict=en`;
  }
}

module.exports = new BookSearchService();
