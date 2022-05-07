const express = require("express")
const router = express.Router();
const Comment = require("../Model/comment.model")
const crudController = require("./crud.controller")
const commentController = crudController(Comment)



router.post("/", commentController.post)
router.get("/", async (req, res) => {
    const comment = await Comment.find().populate('commentor').populate('book')
    res.status(200).json(comment)
})
module.exports = router