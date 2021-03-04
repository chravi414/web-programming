var express = require("express");
var router = express.Router();
var Book = require("../models/Book.js");

/* GET ALL BOOKS */
router.get("/", function (req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get("/:id", function (req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post("/", function (req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */

router.put("/:id", async (req, res, next) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body);
  res.json(updatedBook);
});

/* DELETE BOOK */

router.delete("/:id", (req, res, next) => {
  Book.findByIdAndDelete(req.params.id, (err, response) => {
    if (err) return next(err);
    res.json(response);
  });
});

module.exports = router;
