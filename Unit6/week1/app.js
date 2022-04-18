const express = require("express")
const books = require('./books.json')
const author = require('./author.json')
const library = require('./library.json')
const server = express()

function logger(req, res, next) {
    console.log(req.url)
    next();

}
function permission(req, res, next) {
    if (req.url) {
        next();
    }

}
server.get('/books', logger, (req, res, next) => {

    res.json(books)
})
server.get("/author",  [logger, permission ], (req, res, next) => {
    res.json(author)
})
server.get("/library", [ logger, permission ], (req, res, next) => {
    res.json(library)
})
const PORT = 8000
server.listen(PORT, () => {
    console.log(`Listening to the Port ${PORT}`)
})