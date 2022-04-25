const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required:false},
    lastName: { type: String, required: true },
    Age: { type: Number, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: false, default:"Female"},
    address: { type: String, required: true },
    type:{type:String, required:false, default:"Customer"},
    createdAt: { type: Date, required: true, default:Date.now() },
    updatedAt: { type: Date, required: true, default: Date.now() }
})

const User = mongoose.model("user", userSchema);

module.exports = User;


// {firstName (required)
// middleName(optional)
// lastName(required)
// age(required)
// email(required)
// address(required)
// gender(optional and should default to Female)
// type(optional and it can take value of customer or employee and if not provided then default to customer )
// createdAt(required)
// updatedAt(required) }