const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const publicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    book:{type:mongoose.Schema.Types.ObjectId,ref:"book"}
},
    {
        versionKey: false,
        timestamps: true
    }
)

const Publication = mongoose.model("publication", publicationSchema);

module.exports = Publication