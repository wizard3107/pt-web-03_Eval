const express = require("express")
const router = express.Router();
const Book = require("../Model/book.model")
const crudController = require("./crud.controller")
const bookController = crudController(Book)



router.post("/",bookController.post)
router.get("/", async(req,res)=>{
    const book = await Book.find().limit(10).populate('author')
    res.status(200).json(book)
})
router.patch("/user/:id",async(req,res)=>{
    try {
        const id = req.params.id
        if (id) {
            let data= await Book.updateOne({ user:id }, { $set: { likes: 0 } }, { new: true })
            res.status(200).json(data);
        }
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message })
    }
})
module.exports = router