const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, minlength: 1, maxlength: 30},
    lastName: { type: String, required: false },
    age:{type:Number,require:true, minlength:1,maxlength:150 },
    email: { type: String, required: true, unique:true},
    image: { type: String, required: true}
},
{
    versionKey:false,
    timestamps:true
}
)

const User = mongoose.model("user", userSchema);

module.exports = User



