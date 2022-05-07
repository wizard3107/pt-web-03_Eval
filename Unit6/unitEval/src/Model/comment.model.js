const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const commentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: "book" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" }

},
    {
        versionKey: false,
        timestamps: true
    }
)

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment