const booksController = require("../../controllers/booksController");
const router = require("express").Router();
const BookSearchService = require("../../services/BookSearchService");

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
  BookSearchService.search(req.params.query)
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

module.exports = router;
