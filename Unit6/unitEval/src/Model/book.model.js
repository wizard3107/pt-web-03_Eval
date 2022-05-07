const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const bookSchema = new mongoose.Schema({
    content: { type: String, required: true },
    likes: { type: String, required: false, default:0 },
    coverImage: { type: String, required: true },
    author:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}

},
    {
        versionKey: false,
        timestamps: true
    }
)

const Book = mongoose.model("book", bookSchema);

module.exports = Book