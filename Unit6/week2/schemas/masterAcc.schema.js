
const mongoose = require("mongoose")
const masterAccSchema = new mongoose.Schema({
    balance: { type: Number, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: { type: Date, required: true, default: Date.now() },
    branchDetails:[{type:mongoose.Schema.Types.ObjectId, ref:"branchDetail"}],
    savingAccounts: [{ type: mongoose.Schema.Types.ObjectId, ref: "savingAcc"}],
    fixedAccounts:[{type:mongoose.Schema.Types.ObjectId, ref:"fixedAcc"}]
})

const MasterAcc = mongoose.model("masterAcc", masterAccSchema);

module.exports = MasterAcc;


// balance(required) This is the total balance that the person has in the bank
// createdAt(required)
// updatedAt(required)