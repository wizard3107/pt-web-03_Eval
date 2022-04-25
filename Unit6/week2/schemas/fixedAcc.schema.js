const mongoose = require("mongoose")
const fixedAccSchema = new mongoose.Schema({
    account_number: { type: Number, unique:true,required: true },
    balance:{type:Number,required:true},
    intrestRate:{type:Number, reequired:true},
    startDate:{type:String,required:true},
    maturityDate:{type:String, required:true},
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: { type: Date, required: true, default: Date.now() },
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    brachDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: "branchDetail" }],
})

const FixedAcc = mongoose.model("fixedAcc", fixedAccSchema);

module.exports = FixedAcc;
// account_number(required and should be unique)
// balance(required)
// interestRate(required)
// startDate(required)
// maturityDate(required)
// createdAt(required)
// updatedAt(required)