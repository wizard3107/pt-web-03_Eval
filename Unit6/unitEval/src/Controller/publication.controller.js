const express = require("express")
const router = express.Router();
const Publication = require("../Model/publication.model")
const crudController = require("./crud.controller")
const publicationController = crudController(Publication)



router.get("/", publicationController.getAll)
router.post("/", publicationController.post)
module.exports = router