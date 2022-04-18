const express = require("express")
const books = require('./books.json')
const author = require('./author.json')
const library = require('./library.json')
const server = express()

function log_console(req, res, next) {
    console.log(req.url)
    next();

}
let response = {};
function permission(req, res, next) {

    if (req.url) {
        response["route"] = req.url;
        response["permission"] = true;
        console.log(response)
        next();
    }


}
server.get('/books', log_console, (req, res, next) => {

    res.json(books)
})
server.get("/author", [permission, log_console], (req, res, next) => {
    res.send(response)
})
server.get("/library", [permission, log_console], (req, res, next) => {
    res.send(response)
})
const PORT = 8000
server.listen(PORT, () => {
    console.log(`Listening to the Port ${PORT}`)
})