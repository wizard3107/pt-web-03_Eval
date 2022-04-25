const mongoose = require("mongoose")
const branchDetailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    IFSC: { type: String, required: true },
    MICR:{type:Number, required:true},
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: { type: Date, required: true, default: Date.now() }
})

const BranchDetail = mongoose.model("branchDetail", branchDetailSchema);

module.exports = BranchDetail;
// name(required)
// address(required)
// IFSC(required and string)
// MICR(required and number)
// createdAt(required)
// updatedAt(required)