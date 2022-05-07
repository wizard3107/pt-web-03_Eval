const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const bookSchema = new mongoose.Schema({
    content: { type: String, required: true, minlength: 1, maxlength: 30 },
    likes: { type: String, required: false, default:0 },
    coverImage: { type: String, required: true },
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}

},
    {
        versionKey: false,
        timestamps: true
    }
)

const Book = mongoose.model("book", bookSchema);

module.exports = Book