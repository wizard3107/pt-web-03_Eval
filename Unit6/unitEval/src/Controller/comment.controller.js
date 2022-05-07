const express = require("express")
const router = express.Router();
const Comment = require("../Model/comment.model")
const crudController = require("./crud.controller")
const commentController = crudController(Comment)



router.get("/", commentController.getAll)
router.post("/", commentController.post)
module.exports = router