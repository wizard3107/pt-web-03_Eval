const mongoose = require("mongoose")
const savingAccSchema = new mongoose.Schema({
    account_number: { type: Number,unique:true, required: true },
    balance: { type: Number, required: true },
    intrestRate: { type: Number, reequired: true },
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: { type: Date, required: true, default: Date.now() },
    users:[{type:mongoose.Schema.Types.ObjectId, ref:"user"}],
    brachDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: "branchDetail" }],
})

const SavingAcc = mongoose.model("savingAcc", savingAccSchema);

module.exports = SavingAcc;
// account_number(required and should be unique)
// balance(required)
// interestRate(required)
// createdAt(required)
// updatedAt(required)