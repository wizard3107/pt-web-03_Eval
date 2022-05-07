const express = require("express")
const router = express.Router();
const Book = require("../Model/book.model")
const crudController = require("./crud.controller")
const bookController = crudController(Book)



router.get("/", bookController.getAll)
router.post("/",bookController.post)
module.exports = router