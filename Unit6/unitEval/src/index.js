const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const port = 8005
const DB_url = "mongodb+srv://ashish8923:ashu_8923@cluster0.x3dd0.mongodb.net/unitEval?retryWrites=true&w=majority"


const userController = require("./Controller/user.controller")
const bookController = require("./Controller/book.controller")
const publicationController = require("./Controller/publication.controller")
const commentController = require("./Controller/comment.controller")
require("dotenv").config();
const app = express();

const connect = () => {
    return mongoose.connect(DB_url);
}

app.use(express.json());
app.use(cors())

app.use("/user", userController)
app.use("/book", bookController)
app.use("/publication", publicationController)
app.use("/comment", commentController)



app.listen(port, async () => {
    try {
        await connect();
        console.log("Connected To Mongoose")
        console.log(`connected to port: ${port}`)
    }
    catch (e) {
        console.log(e.message)
    }
})
