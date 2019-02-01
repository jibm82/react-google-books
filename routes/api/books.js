const axios = require("axios");
const booksController = require("../../controllers/booksController");
const router = require("express").Router();

router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

router.route("/search/:query").get((req, res) => {
  const apiKey = process.env.GOOGLE_API_KEY;
  const baseUrl = "https://www.googleapis.com/books/v1/volumes";
  const url = `${baseUrl}?q=${req.params.query}&key=${apiKey}&langRestrict=en`;

  axios
    .get(url)
    .then(response => {
      res.json(response.data.items);
    })
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

module.exports = router;
